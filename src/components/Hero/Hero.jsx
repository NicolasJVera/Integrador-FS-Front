import {
  Button,
  ButtonContainer,
  Description,
  HeroContent,
  HeroSection,
  Title,
} from "./HeroStyles";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  buttonVariants,
} from "../../animations/hero/variants";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <HeroSection id="home">
      <HeroContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title as={motion.h1} variants={itemVariants}>
          Black Star | Alternative Clothing Store
        </Title>
        <Description as={motion.p} variants={itemVariants}>
          Moda alternativa para aquellos que se atreven a destacar. Expresa tu
          verdadero yo a través de nuestras colecciones góticas y emo únicas.
        </Description>
        <ButtonContainer>
          <Button as={motion.div} variants={buttonVariants} whileHover="hover">
            <Link to="/productos">
              Explorar Productos
            </Link>
          </Button>

          <Button
            secondary
            as={motion.div}
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/nosotros">
              Sobre Nosotros
            </Link>
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
