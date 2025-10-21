// src/hooks/useContactForm.js
import { useFormik } from "formik";
import * as Yup from "yup";

export default function useContactForm(onSuccess) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "El nombre es muy corto")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es obligatorio"),
    subject: Yup.string()
      .min(2, "El asunto es muy corto")
      .required("El asunto es obligatorio"),
    message: Yup.string()
      .min(5, "El mensaje es muy corto")
      .required("El mensaje es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (onSuccess) {
        onSuccess(values);
      }
      resetForm();
    },
  });

  return formik;
}
