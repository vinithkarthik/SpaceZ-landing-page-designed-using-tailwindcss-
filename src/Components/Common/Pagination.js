import React from "react";

/**
 * Pagination
 * A reusable component for displaying Pagination for grid
 * 
 * Props
 * @param {Number} paginationLength - Number of pages
 * @param {Number} currentPage - current selected page
 * @param {Function} onPageChange - callback function called on changing the page
 * 
 * Examples
 * <Pagination paginationLength={4} currentPage={1} onPageChange={onPageChange} />
 */
const Pagination = ({paginationLength, currentPage, onPageChange}) => {
    let pages = [], paginationClass = "p-3 cursor-pointer";
    for(let i = 1;i <= paginationLength; i++) {
        let customClass = paginationClass;
        if(currentPage === i) {
            customClass += " underline";
        }
        pages.push(<span key={i} className={customClass} onClick={() => onPageChange(i)} >{i}</span>)
    }
    return (
        <div>
            {pages}
        </div>
    )
}

export default Pagination