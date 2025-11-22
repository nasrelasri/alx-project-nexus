"use client";

import { useState, useMemo } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "./mockData";

const ITEMS_PER_PAGE = 9;

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return mockProducts.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <header className="space-y-3 text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Products
            </h1>
          </header>

          <section aria-live="polite">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProducts.length > 0 &&
                paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                  />
                ))}
            </div>
          </section>

          <nav
            className="flex items-center justify-center gap-4 border-t border-neutral-200 pt-6"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={handlePrevious}
              className="cursor-pointer rounded-full border border-neutral-200 px-6 py-2 text-sm font-semibold text-neutral-400 transition hover:border-neutral-300 hover:text-neutral-600 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:text-neutral-300"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => handlePageClick(pageNumber)}
                    className={`h-10 w-10 rounded-full border text-sm font-semibold transition ${
                      isActive
                        ? "border-neutral-900 bg-neutral-900 text-white cursor-default"
                        : "cursor-pointer border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
                    }`}
                    disabled={isActive}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="cursor-pointer rounded-full border border-neutral-200 px-6 py-2 text-sm font-semibold text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:text-neutral-300"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
