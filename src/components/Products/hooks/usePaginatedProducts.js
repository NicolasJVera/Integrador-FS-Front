// src/components/Products/hooks/usePaginatedProducts.js
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { scrollToTop, defaultHandlers } from "../constants/paginationConfig";

export const usePaginatedProducts = ({
  productsPerPage = 6,
  handlers = defaultHandlers,
  scrollFn = scrollToTop,
}) => {
  const products = useSelector((state) => state.products?.productos || []);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
    scrollFn(topRef);
  }, [selectedCategory, scrollFn]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return {
    topRef,
    visibleProducts,
    currentPage,
    pageNumbers,
    totalPages,
    handleNext: () =>
      handlers.handleNext(
        currentPage,
        totalPages,
        setCurrentPage,
        scrollFn,
        topRef
      ),
    handlePrev: () =>
      handlers.handlePrev(currentPage, setCurrentPage, scrollFn, topRef),
    handlePageClick: (num) =>
      handlers.handlePageClick(num, setCurrentPage, scrollFn, topRef),
  };
};