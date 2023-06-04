import PropTypes from 'prop-types';
import * as S from './TransactionHistory.styled';
import { TransactionsItem } from './TransactionsItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.HeadCells>Type</S.HeadCells>
          <S.HeadCells>Amount</S.HeadCells>
          <S.HeadCells>Currency</S.HeadCells>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionsItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </S.Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};