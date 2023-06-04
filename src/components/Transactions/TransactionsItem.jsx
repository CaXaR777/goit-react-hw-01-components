import PropTypes from 'prop-types';
import * as S from './TransactionHistory.styled';

export const TransactionsItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <S.RowLines>
      <S.BodyCells>{type}</S.BodyCells>
      <S.BodyCells>{amount}</S.BodyCells>
      <S.BodyCells>{currency}</S.BodyCells>
    </S.RowLines>
  );
};

TransactionsItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};