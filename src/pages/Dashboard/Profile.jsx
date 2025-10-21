import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  ProfileContainer,
  Card,
  CardHeader,
  Heading,
  Subheading,
  CardBody,
  DetailRow,
  Label,
  Value,
  Button,
} from "./Profile.styles";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <ProfileContainer>
        <Card>
          <CardHeader>
            <Heading>Cargando perfil...</Heading>
          </CardHeader>
        </Card>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <Card>
        <CardHeader>
          <div>
            <Heading>Perfil de Usuario</Heading>
            <Subheading>Información personal y configuración de la cuenta.</Subheading>
          </div>
          {/* <LogoutButton onClick={logout}>Cerrar Sesión</LogoutButton> */}
        </CardHeader>
        <CardBody>
          <dl>
            <DetailRow>
              <Label>Nombre completo</Label>
              <Value>{user.nombre}</Value>
            </DetailRow>
            <DetailRow>
              <Label>Correo electrónico</Label>
              <Value>{user.correo}</Value>
            </DetailRow>
          </dl>
        </CardBody>
      </Card>

      <Button onClick={() => navigate('/mis-ordenes')}>Ir a Mis ordenes</Button>
    </ProfileContainer>
  );
};

export default Profile;
