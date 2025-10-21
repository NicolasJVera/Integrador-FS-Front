export const PRODUCTS_PER_PAGE = 6;

export const scrollToTop = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export const defaultHandlers = {
  handleNext: (currentPage, totalPages, setPage, scrollFn, ref) => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
      scrollFn(ref);
    }
  },
  handlePrev: (currentPage, setPage, scrollFn, ref) => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
      scrollFn(ref);
    }
  },
  handlePageClick: (pageNum, setPage, scrollFn, ref) => {
    setPage(pageNum);
    scrollFn(ref);
  },
};
