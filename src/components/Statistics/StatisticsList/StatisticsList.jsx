import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { StyledStatList } from './StatisticsList.styled';

export const StatisticsList = ({ items }) => {
  return (
    <StyledStatList>
      {items.map(item => {
        return <StatisticsItem item={item} key={item.id} />;
      })}
    </StyledStatList>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};