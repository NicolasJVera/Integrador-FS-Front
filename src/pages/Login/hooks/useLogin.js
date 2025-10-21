import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria')
});

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login({
          correo: values.email,
          clave: values.password
        });
        
        toast.success('¡Inicio de sesión exitoso!');
        navigate('/');
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        
        if (error.response?.data?.errors) {
          const serverErrors = {};
          const { errors } = error.response.data;
          
          if (errors.correo) serverErrors.email = errors.correo.msg || 'Error en el correo';
          if (errors.clave) serverErrors.password = errors.clave.msg || 'Error en la contraseña';
          
          setErrors(serverErrors);
        }
        
        toast.error('Error al iniciar sesión. Verifica tus credenciales.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return {
    formik
  };
};
