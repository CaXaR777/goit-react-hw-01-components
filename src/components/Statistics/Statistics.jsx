import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { StyledContainer } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledContainer>
      {title && <h2>{title}</h2>}
      <StatisticsList items={stats} />
    </StyledContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};