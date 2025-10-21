import Hero from "../../components/Hero/Hero";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { pathname } = useLocation();

  // Efecto para reiniciar el scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
