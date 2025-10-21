import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { NewsletterForm } from '../Contact/ContactStyles';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Newsletter = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo es obligatorio'),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log('Suscripción enviada:', values);
    setSubmitStatus('sending');
    
    // Simulamos el envío
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      setSubmitStatus('success');
      
      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ errors, touched, isSubmitting, isValid, dirty }) => (
        <StyledForm>
          <NewsletterForm>
            <div className="form-row">
              <div className="input-wrapper">
                <Field
                  type="email"
                  name="email"
                  placeholder="Tu dirección de correo electrónico"
                  className={`${touched.email && errors.email ? 'error' : ''} ${!touched.email ? '' : errors.email ? 'invalid' : 'valid'}`}
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting || !isValid || !dirty}
                className={`submit-btn ${(isSubmitting || !isValid || !dirty) ? 'disabled' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : '¡Suscríbete!'}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ¡Gracias por suscribirte! Te has registrado correctamente.
              </div>
            )}
            
            {submitStatus === 'sending' && (
              <div className="sending-message">
                Procesando tu solicitud...
              </div>
            )}
          </NewsletterForm>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Newsletter;
