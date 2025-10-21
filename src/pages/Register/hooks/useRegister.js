import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres, al menos una mayúscula, al menos una minúscula, al menos un número y al menos un símbolo')
    .required('La contraseña es obligatoria')
});

export const useRegister = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await register({
          nombre: values.nombre,
          correo: values.email,
          clave: values.password
        });
        
        toast.success('¡Registro exitoso! Por favor inicia sesión.');
        navigate('/login');
      } catch (error) {
        console.error('Error en el registro:', error);
        
        
        const errorMessage = error.message || '';
        
        if (errorMessage.includes('El correo ya está registrado') || 
            errorMessage.includes('El correo electrónico ya está en uso')) {
          const errorMsg = 'Este correo electrónico ya está registrado. Por favor, inicia sesión o utiliza otro correo.';
          toast.error(errorMsg, { duration: 5000 });
          setErrors({
            ...formik.errors,
            email: 'Este correo ya está registrado'
          });
          return;
        }          
        
          
          const errorMsg = errorMessage || 'Error al registrarse. Por favor, inténtalo de nuevo.';
          toast.error(errorMsg, { duration: 5000 });
          
          setErrors({
            ...formik.errors,
            submit: errorMsg
          });
      } finally {
        setSubmitting(false);
      }
    }
  });

  return {
    formik,
    loading
  };
};
