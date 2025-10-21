import {
  CollectionsContainer,
  Title,
  Subtitle,
  CardsContainer,
  Card,
  CardImage,
  CardContent
} from "./CollectionsStyles";
import { Link } from "react-router-dom";

function Collections() {

  return (
    <CollectionsContainer id="products">
      <Title>Colecciones Destacadas</Title>
      <Subtitle>
        Descubre nuestros estilos más populares que definen la escena de la moda
        alternativa.
      </Subtitle>
      
      <CardsContainer>
      <Card>
          <CardImage>
            <img
              src="/icons/star.gif"
              alt="Coleccion De Jeans Alternativos"
            />
          </CardImage>
          <CardContent>
            <h3>Todos Los Productos</h3>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>

        <Card>
          <CardImage>
            <img
              src="/img/band-merch/reme3.webp"
              alt="Coleccion Merch Bandas"
            />
          </CardImage>
          <CardContent>
            <h3>Merch de Bandas</h3>
            <p>Remeras, buzos y más de tus bandas favoritas. Estilo oscuro y auténtico.</p>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <img
              src="/img/hoddies/hoddie-araña.webp"
              alt="Coleccion Hoddies"
            />
          </CardImage>
          <CardContent>
            <h3>Hoddies</h3>
            <p>Abrigate con estilo. Hoodies oversize con arte oscuro.</p>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <img
              src="/img/anime-merch/reme.webp"
              alt="Coleccion de Merch Anime"
            />
          </CardImage>
          <CardContent>
            <h3>Anime Merch</h3>
            <p>Fusionamos lo mejor del anime con la estética gótica.</p>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <img
              src="/img/jeans/jean-angel.webp"
              alt="Coleccion De Jeans Alternativos"
            />
          </CardImage>
          <CardContent>
            <h3>Jeans Alternativos</h3>
            <p>Jeans que no siguen reglas. Cierres, cortes, y detalles que rugen rebeldía con cada paso.</p>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardImage>
            <img
              src="/img/bags/korn.webp"
              alt="Coleccion De Jeans Alternativos"
            />
          </CardImage>
          <CardContent>
            <h3>Mochilas Alternativas</h3>
            <p>Mochilas que no siguen reglas. Cierres, cortes, y detalles que rugen rebeldía con cada paso.</p>
            <Link to="/productos">Explora ↓</Link>
          </CardContent>
        </Card>
      </CardsContainer>
    </CollectionsContainer>
  );
}

export default Collections;
