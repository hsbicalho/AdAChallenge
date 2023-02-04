import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ReservasContext from './ReservasContext';
import geraContasReceber from '../helpers/contasReceber';
import geraContasPagar from '../helpers/contasPagar';

function ReservasProvider({ children }) {
  const [reservas, setReservas] = useState([]);
  const [contasReceber, setContasReceber] = useState([]);
  const [contasPagar, setContasPagar] = useState([]);
  const [dbContas, setDbContas] = useState([]);

  useEffect(() => {
    async function fetchApiData() {
      const { data } = await axios.get('http://localhost:3001/reservas');
      await setReservas(data);
    }
    fetchApiData();
  }, []);

  useEffect(() => {
    if (reservas) {
      const receber = geraContasReceber(reservas);
      const pagar = geraContasPagar(reservas);
      setContasPagar(pagar);
      setContasReceber(receber);
      setDbContas(pagar);
    }
  }, [reservas]);

  const contextValue = useMemo(() => ({
    reservas,
    setReservas,
    contasReceber,
    setContasReceber,
    contasPagar,
    setContasPagar,
    dbContas,
    setDbContas,

  }), [reservas, contasReceber, contasPagar, dbContas]);

  return (
    <ReservasContext.Provider value={ contextValue }>
      {children}
    </ReservasContext.Provider>
  );
}

ReservasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReservasProvider;
