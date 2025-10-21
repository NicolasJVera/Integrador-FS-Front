import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import RegisterForm from './Form/RegisterForm';
import { 
  RegisterContainer, 
  RegisterCard, 
  Title,
  Subtitle
} from './Register.styles';

const Register = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirigir si el usuario ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <RegisterContainer>
      <RegisterCard>
        <Title>Crear Cuenta</Title>
        {/* <Subtitle>
          ¿Ya tienes una cuenta?{' '}
          <a href="/login">Inicia sesión aquí</a>
        </Subtitle> */}
        <RegisterForm />
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
