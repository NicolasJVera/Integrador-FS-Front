import CardProduct from "./CardProduct";
import {
  ProductsSection,
  ProductsTitle,
  ProductsSubtitle,
  ProductsGrid,
  ButtonContainerStyled,
  ButtonCard,
} from "./CardsProductsStyles";
import { AnimatedGrid } from "../../animations/products/AnimatedGrid";
import { usePaginatedProducts } from "../Products/hooks/usePaginatedProducts";
import {
  PRODUCTS_PER_PAGE,
  defaultHandlers,
  scrollToTop,
} from "../Products/constants/paginationConfig";
import { useSelector } from "react-redux";

const CardsProducts = () => {
  const { selectedCategory } = useSelector(state => state.categories);
  const {
    topRef,
    visibleProducts,
    currentPage,
    pageNumbers,
    totalPages,
    handlePrev,
    handleNext,
    handlePageClick,
  } = usePaginatedProducts({
    productsPerPage: PRODUCTS_PER_PAGE,
    handlers: defaultHandlers,
    scrollFn: scrollToTop,
  });

  return (
    <ProductsSection ref={topRef}>
      <ProductsTitle>Todos los Productos</ProductsTitle>
      <ProductsSubtitle>Encuentra la mejor moda alternativa</ProductsSubtitle>

      <AnimatedGrid>
        <ProductsGrid id="productos">
          {visibleProducts.map((product) => (
            <CardProduct 
            key={product._id || product.id}  // Usa _id si es el ID de MongoDB, sino usa id
            {...product} />
          ))}
        </ProductsGrid>
      </AnimatedGrid>

      {!selectedCategory && (
        <ButtonContainerStyled>
          {currentPage > 1 && <ButtonCard onClick={handlePrev}>{"<"}</ButtonCard>}
          {pageNumbers.map((number) => (
            <ButtonCard
              key={number}
              onClick={() => handlePageClick(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </ButtonCard>
          ))}
          {currentPage < totalPages && (
            <ButtonCard onClick={handleNext}>{">"}</ButtonCard>
          )}
        </ButtonContainerStyled>
      )}
    </ProductsSection>
  );
};

export default CardsProducts;
