import React, { useContext, useEffect, useState } from 'react';
import ReservasContext from '../../context/ReservasContext';
import messes from '../../constantes/messes';
import * as S from './styles';
import Header from '../../components/Header';
import PaginatedItems from '../../components/PaginatedItems';

export default function Home() {
  const { contasReceber, contasPagar } = useContext(ReservasContext);
  const [renderContas, setRenderContas] = useState([]);
  const [tipoConta, setTipoConta] = useState('Pagar');
  const [type, setType] = useState('Pagar');
  const [propInput, setPropInput] = useState('');
  const [mesOption, setMesOption] = useState('');
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setRenderContas(contasPagar);
  }, [contasPagar]);

  function filtraPropriedade(listToFilter, codigo) {
    if (codigo !== '') {
      return listToFilter
        .filter((conta) => conta.codigoPropriedade === codigo);
    }
    return listToFilter;
  }

  function filtraMes(listToFilter, mes) {
    if (mes !== '') {
      return listToFilter
        .filter((conta) => conta.vencimento.split('/')[1] === mes);
    }
    return listToFilter;
  }
  function filterContas(contas, mes, codigo) {
    setRenderContas(filtraPropriedade(filtraMes(contas, mes), codigo));
    setType(tipoConta);
  }

  function filterCountsList() {
    if (tipoConta === 'Pagar') return filterContas(contasPagar, mesOption, propInput);
    return filterContas(contasReceber, mesOption, propInput);
  }

  function resetaFiltros() {
    setMesOption('');
    setPropInput('');
    setRenderContas(contasPagar);
  }

  return (
    <S.HomePageMainContainer>
      <Header />
      <S.HomePageFilterContainer>
        <S.HomePageFormContaTipoLabel htmlFor="tipoDeConta">
          <span>
            Tipo de Conta:
          </span>
          <select
            name="tipoDeConta"
            id="tipoDeConta"
            onChange={ ({ target: { value } }) => setTipoConta(value) }
          >
            <option value="Pagar">A Pagar</option>
            <option value="Receber">A Receber</option>
          </select>
        </S.HomePageFormContaTipoLabel>

        <S.HomePageFormPropriedadesLabel
          htmlFor="propriedadeInput"
        >
          <span>
            Propriedade:
          </span>
          <input
            placeholder="Digite a Propriedade"
            type="text"
            id="propriedadeInput"
            onChange={ ({ target: { value } }) => setPropInput(value) }
          />
        </S.HomePageFormPropriedadesLabel>

        <S.HomePageFormVencimento htmlFor="mesDeVencimento">
          <span>
            Vencimento:
          </span>
          <select
            name="mesDeVencimento"
            id="mesDeVencimento"
            onChange={ ({ target: { value } }) => setMesOption(value) }
          >
            {messes.map((mes) => (
              <option
                key={ mes.numero }
                value={ mes.numero }
              >
                {mes.mes}
              </option>))}
          </select>
          <button
            type="button"
            onClick={ () => filterCountsList() }
          >
            Buscar

          </button>
        </S.HomePageFormVencimento>
        <S.HomePageFormRemoveFiltroContainer>
          <button
            id="removeFiltroButton"
            type="button"
            onClick={ () => resetaFiltros() }
          >
            Remover Filtros
          </button>
        </S.HomePageFormRemoveFiltroContainer>
      </S.HomePageFilterContainer>
      <S.CardContainer>
        <PaginatedItems
          itemsPerPage={ 12 }
          renderContas={ renderContas }
          itemOffset={ itemOffset }
          setItemOffset={ setItemOffset }
          tipo={ type }
        />
      </S.CardContainer>
    </S.HomePageMainContainer>
  );
}
