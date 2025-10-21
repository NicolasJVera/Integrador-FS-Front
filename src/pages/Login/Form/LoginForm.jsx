import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import {
  FormGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
  RegisterLink,
  LoadingSpinner
} from '../Login.styles';

const LoginForm = () => {
  const { formik } = useLogin();

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $hasError={formik.touched.email && !!formik.errors.email}
          placeholder="tucorreo@ejemplo.com"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorText>{formik.errors.email}</ErrorText>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $hasError={formik.touched.password && !!formik.errors.password}
          placeholder="••••••••"
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText>{formik.errors.password}</ErrorText>
        )}
      </FormGroup>

      <FormGroup>
        <SubmitButton 
          type="submit" 
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <>
              <LoadingSpinner />
              Iniciando sesión...
            </>
          ) : 'Iniciar sesión'}
        </SubmitButton>
      </FormGroup>
      
      <RegisterLink>
        ¿No tienes una cuenta?{' '}
        <Link to="/register">Regístrate</Link>
      </RegisterLink>
    </form>
  );
};

export default LoginForm;
