import * as Yup from 'yup';

export const shippingSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio').min(3, 'El nombre debe tener al menos 3 caracteres'),
  cellphone: Yup.string()
    .matches(/^[0-9+\-() ]+$/, 'Teléfono inválido')
    .required('El teléfono es obligatorio'),
  address: Yup.string().required('La ciudad es obligatoria').min(5, 'La ciudad debe tener al menos 5 caracteres y 4 números'),
  location: Yup.string().required('La dirección es obligatoria').min(4, 'La dirección debe tener al menos 4 caracteres'),

});