import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from './Form/LoginForm';
import { 
  LoginContainer, 
  LoginCard, 
  Title 
} from './Login.styles';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Iniciar Sesión</Title>
        <LoginForm />
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
