import { AboutContainer, AboutImage, AboutText } from "./AboutStyles"


function About() {
  return (
    <>
      <AboutContainer id="aboutUs">
        <AboutText>
          <h4>Sobre Nosotros</h4>
          <h1>Vístete con tu verdadera identidad emocional</h1>
          <p>
          Black Star nació de una pasión por la moda alternativa y la autoexpresión. Creemos que la ropa es más que solo tela es una declaración de identidad y un lienzo para tus emociones.
          </p>
          <p>
            Nuestra marca celebra la diversidad y la autoexpresión. Ofrecemos
            ropa que refleja tu individualidad y estilo único.
            Cada pieza es seleccionada por su calidad, singularidad y capacidad para hacerte destacar entre la multitud.
          </p>
        </AboutText>

        <AboutImage>
          <img src="/icons/star.gif" alt="Imagen de la seccion Sobre Nosotros" />
        </AboutImage>
      </AboutContainer>
    </>
  )
}

export default About
