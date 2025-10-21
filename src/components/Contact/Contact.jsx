import { useState } from 'react';
import { ContactForm, ContactWrapper, FormGroup, Section, Subtitle, Title, SuccessMessage } from "./ContactStyles";
import useContactForm from "./Formik/useContactForm";
import Newsletter from '../Newsletter/Newsletter';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const formik = useContactForm((values) => {
    console.log("Formulario enviado:", values);
    setIsSubmitted(true);
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  });

  return (
    <Section>
      <Title>Únete a Nuestra Comunidad</Title>
      <Subtitle>Suscríbase a nuestro newsletter para obtener ofertas exclusivas, recién llegados e inspiración oscura.</Subtitle>

      <Newsletter>
        <input type="email" placeholder="Su dirección de correo electrónico" />
        <button type="submit">Subscribete!</button>
      </Newsletter>

      <ContactWrapper>
        <Title>Contáctenos</Title>
        <Subtitle>¿Tiene preguntas o necesita ayuda? Comunícate con nuestro equipo.</Subtitle>

        <ContactForm onSubmit={formik.handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Tu Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`${formik.touched.name && formik.errors.name ? 'error' : ''} ${!formik.values.name && formik.touched.name ? 'invalid' : ''}`}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-message">{formik.errors.name}</div>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Tu Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${formik.touched.email && formik.errors.email ? 'error' : ''} ${!formik.values.email && formik.touched.email ? 'invalid' : ''}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red", fontSize: "0.8em" }}>{formik.errors.email}</div>
            ) : null}
          </FormGroup>

          <FormGroup style={{ gridColumn: "span 2" }}>
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className={`${formik.touched.subject && formik.errors.subject ? 'error' : ''} ${!formik.values.subject && formik.touched.subject ? 'invalid' : ''}`}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div style={{ color: "red", fontSize: "0.8em" }}>{formik.errors.subject}</div>
            ) : null}
          </FormGroup>

          <FormGroup style={{ gridColumn: "span 2" }}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`${formik.touched.message && formik.errors.message ? 'error' : ''} ${!formik.values.message && formik.touched.message ? 'invalid' : ''}`}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div style={{ color: "red", fontSize: "0.8em" }}>{formik.errors.message}</div>
            ) : null}
          </FormGroup>

          <button 
            type="submit" 
            disabled={!formik.isValid || formik.isSubmitting}
            className={`submit-btn ${!formik.isValid ? 'disabled' : ''}`}
          >
            {formik.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          {isSubmitted && (
            <SuccessMessage>
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactWrapper>
    </Section>
  );
}

export default Contact;
