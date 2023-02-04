import React from 'react';
import PropTypes from 'prop-types';
import ContasCard from '../ContasCard';

export default function Items({ currentItems, tipo }) {
  return (
    <>
      {currentItems
        .map(({ valor, vencimento, codigoPropriedade }, index) => (
          <ContasCard
            key={ index }
            valor={ valor }
            vencimento={ vencimento }
            codigoPropriedade={ codigoPropriedade }
            tipo={ tipo }
          />
        ))}
    </>
  );
}

Items.propTypes = {
  currentItems: PropTypes.arrayOf(Object),
  tipo: PropTypes.string,
}.isRequired;
