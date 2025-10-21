import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import {
  FormGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
  LoadingSpinner,
  LoginLink
} from '../Register.styles';

const RegisterForm = () => {
  const { formik, loading } = useRegister();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          type="text"
          id="nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu nombre"
          disabled={loading}
          $hasError={touched.nombre && !!errors.nombre}
        />
        {touched.nombre && errors.nombre && (
          <ErrorText>{errors.nombre}</ErrorText>
        )}
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="tucorreo@ejemplo.com"
          disabled={loading}
          $hasError={touched.email && !!errors.email}
        />
        {touched.email && errors.email && (
          <ErrorText>{errors.email}</ErrorText>
        )}
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="••••••••"
          disabled={loading}
          $hasError={touched.password && !!errors.password}
        />
        {touched.password && errors.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
      </FormGroup>

      <FormGroup>
        <SubmitButton 
          type="submit" 
          disabled={loading || formik.isSubmitting}
        >
          {loading || formik.isSubmitting ? (
            <>
              <LoadingSpinner />
              Creando cuenta...
            </>
          ) : 'Registrarse'}
        </SubmitButton>
      </FormGroup>
      
      <LoginLink>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login">Inicia sesión aquí</Link>
      </LoginLink>
    </form>
  );
};

export default RegisterForm;
