import React from 'react';

 const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []; //storing pageNumbers in empty array
    
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    // pagination content
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {/* Previous Page Button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span> {/* Left double angle quotation mark */}
          </button>
        </li>
        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
        {/* Next Page Button */}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;


