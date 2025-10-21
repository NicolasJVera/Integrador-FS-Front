import {
  ContactItem,
  FooterColumn,
  FooterContainer,
  FooterGrid,
  FooterLink,
  FooterText,
  FooterTitle,
  SocialIcons,
  FooterBottom
} from "./FooterStyles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Black Star</FooterTitle>
          <FooterText>
            Moda alternativa para aquellos que se atreven a destacar. Expresa tu verdadero yo a través de nuestras colecciones góticas y emo únicas.
          </FooterText>
          <SocialIcons>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Ayuda</FooterTitle>
          <FooterLink href="#"> FAQ </FooterLink>
          <FooterLink href="#"> Envios y Devoluciones</FooterLink>
          <FooterLink href="#">Guia de Talle </FooterLink>
          <FooterLink href="#"> Política de Privacidad </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contacto</FooterTitle>
          <ContactItem>Email: <a href="mailto:info@blackstar.com">info@blackstar.com</a></ContactItem>
          <ContactItem>Telefono: +54 123-456-789 </ContactItem>
          <ContactItem>
            Dirección:<br />
            123 Calle Falsa<br />
            Soul City, SC 444-333
          </ContactItem>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <span>© 2025 Black Star. Todos los derechos reservados.</span>
        {/* <div>
          <FooterLink href="#">Términos de Servicio</FooterLink>
          <FooterLink href="#">Política de Privacidad</FooterLink> 
        </div> */}
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
