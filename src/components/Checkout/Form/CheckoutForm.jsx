import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/slices/cart/cartSlice';
import { useOrders } from '../../../pages/Checkout/hooks/useOrders';
import { 
  CheckoutDatosStyles, 
  TittleDatosStyles,
  Input, 
  Button as Submit, 
  Loader, 
  ErrorMessage,
  Label,
  InputWrapper
} from './CheckoutFormStyles';
import { checkoutInitialValues } from './Formik/initial-values';
import { shippingSchema } from './Formik/validation-schema';
import toast from 'react-hot-toast';
import useShipping from '../../Cart/hooks/useShipping';

const CheckoutForm = ({ cartItems, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createOrder, isLoading } = useOrders();
  const handleSubmit = async (values, { setSubmitting }) => {
  const { envio, tieneEnvioGratis, totalConEnvio } = useShipping(
      cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    );
  try {
    const items = cartItems.map(item => {
      const title = item.title || item.name || `Producto ${item.id}`;
      const description = item.desc || 'Sin descripción';
      
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        title: title,
        description: description,
        image: item.img,
      };
    });

    const shippingDetails = {
      name: values.name,
      cellphone: values.cellphone,
      address: values.address,
      location: values.location
    };

    const orderData = {
      items,
      shippingDetails,
      shippingCost: tieneEnvioGratis ? 0 : envio
    };

      const response = await createOrder(orderData);
      
      if (response) {
        toast.success('¡Pedido realizado con éxito!');
        dispatch(clearCart());
        navigate('/felicitaciones');
      }
    } catch (error) {
      console.error('Error al procesar el pedido:', {
        message: error.message,
        response: error.response?.data,
      });
      
      const errorMessage = error.response?.data?.message || 
        'Hubo un error al procesar tu pedido';
      
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <CheckoutDatosStyles>
      <TittleDatosStyles>Datos de envío</TittleDatosStyles>

      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={shippingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <InputWrapper>
              <Label htmlFor="name">Nombre completo *</Label>
              <Field
                as={Input}
                id="name"
                name="name"
                placeholder="Ej: Nombre Apellido"
                hasError={touched.name && errors.name}
              />
              <ErrorMessage>{touched.name && errors.name}</ErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="cellphone">Teléfono *</Label>
              <Field
                as={Input}
                id="cellphone"
                name="cellphone"
                placeholder="Ej: 1122334455"
                hasError={touched.cellphone && errors.cellphone}
              />
              <ErrorMessage>{touched.cellphone && errors.cellphone}</ErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="location">Localidad *</Label>
              <Field
                as={Input}
                id="location"
                name="location"
                placeholder="Ej: CABA"
                hasError={touched.location && errors.location}
              />
              <ErrorMessage>{touched.location && errors.location}</ErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="address">Dirección *</Label>
              <Field
                as={Input}
                id="address"
                name="address"
                placeholder="Calle y número"
                hasError={touched.address && errors.address}
              />
              <ErrorMessage>{touched.address && errors.address}</ErrorMessage>
            </InputWrapper>

            <Submit type="submit" disabled={cartItems.length === 0 || isLoading}>
              {isLoading ? <Loader /> : 'Confirmar pedido'}
            </Submit>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyles>
  );
};

export default CheckoutForm;
