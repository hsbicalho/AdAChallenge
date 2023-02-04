import PropTypes from 'prop-types';
import * as S from './styles';

function ContasCard({ valor, vencimento, codigoPropriedade, tipo }) {
  return (
    <S.CardMainContainer>
      <S.CardContaTipo>
        <span>
          {tipo}
        </span>
      </S.CardContaTipo>
      <S.CardContaValor htmlFor="contaValor">
        <span>Valor:</span>
        <div id="contaValor">
          {`R$: ${(Math.floor(valor * 100) / 100)}`}
        </div>
      </S.CardContaValor>

      <S.CardContaData>
        <span>Vencimento:</span>
        <div>{vencimento}</div>
      </S.CardContaData>

      <S.CardCodigoPropriedade>
        <span>Propriedade:</span>
        <div>{codigoPropriedade}</div>
      </S.CardCodigoPropriedade>

    </S.CardMainContainer>
  );
}

ContasCard.propTypes = {
  valor: PropTypes.string,
  vencimento: PropTypes.string,
  codigoPropriedade: PropTypes.string,
  tipo: PropTypes.string,
}.isRequired;

export default ContasCard;
