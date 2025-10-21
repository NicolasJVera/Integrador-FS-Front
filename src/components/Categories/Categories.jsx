import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/slices/categories/categoriesSlice";
import {
  CategoriesSection,
  CategoriesTitle,
  CategoriesSubtitle,
  FilterContainer,
  MobileMenuButton,
  MobileMenu,
  MobileMenuItem
} from "./CategoriesStyles";
import Categorie from "./Categorie";
import { FaChevronDown } from "react-icons/fa";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(state => state.categories);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar el tamaño de la pantalla al cargar
    checkIfMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    // Limpiar el listener al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleSelectCategory = (category) => {
    dispatch(selectCategory(category));
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CategoriesSection>
      <CategoriesTitle>Explora Categorías</CategoriesTitle>
      <CategoriesSubtitle>
        Encuentra tu estilo perfecto en nuestras colecciones cuidadosamente seleccionadas.
      </CategoriesSubtitle>

      {isMobile ? (
        <>
          <MobileMenuButton onClick={toggleMenu}>
            {selectedCategory || 'Seleccionar categoría'}
            <FaChevronDown style={{ marginLeft: '8px' }} />
          </MobileMenuButton>
          <MobileMenu $isOpen={isMenuOpen}>
            {categories.map((cat) => (
              <MobileMenuItem 
                key={cat.category}
                onClick={() => handleSelectCategory(cat.category)}
                $active={selectedCategory === cat.category}
              >
                {cat.category}
              </MobileMenuItem>
            ))}
          </MobileMenu>
        </>
      ) : (
        <FilterContainer>
          {categories.map((cat) => (
            <Categorie
              key={cat.category}
              category={cat}
              selected={selectedCategory}
              onSelect={handleSelectCategory}
            />
          ))}
        </FilterContainer>
      )}
    </CategoriesSection>
  );
};

export default Categories;
