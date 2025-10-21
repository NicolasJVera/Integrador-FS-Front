// import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  Title,
  Subtitle,
  Message,
  HomeButton
} from './NotFoundStyles';

function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>¡Ups! Página no encontrada</Subtitle>
      <Message>
        La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no está disponible temporalmente.
      </Message>
      <HomeButton to="/">Volver al inicio</HomeButton>
    </NotFoundContainer>
  );
}

export default NotFound;
