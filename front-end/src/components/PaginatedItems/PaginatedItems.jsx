import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Items from '../Items';
import ContainerPagination from './styles';

export default function PaginatedItems({
  itemsPerPage,
  renderContas,
  tipo,
  itemOffset,
  setItemOffset }) {
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = renderContas.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(renderContas.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % renderContas.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={ currentItems } tipo={ tipo } />
      <ContainerPagination>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={ handlePageClick }
          pageRangeDisplayed={ 5 }
          pageCount={ pageCount }
          previousLabel="< previous"
          renderOnZeroPageCount={ null }
        />
      </ContainerPagination>
    </>
  );
}

PaginatedItems.propTypes = {
  renderContas: PropTypes.arrayOf(Object),
  itemsPerPage: PropTypes.number,
  tipo: PropTypes.string,
  itemOffset: PropTypes.number,
  setItemOffset: PropTypes.func,
}.isRequired;
