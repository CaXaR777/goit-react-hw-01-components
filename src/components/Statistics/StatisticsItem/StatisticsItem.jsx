import PropTypes from 'prop-types';
import { StyledStatItem } from './StatisticsItem.styled';
import { getRandomHexColor } from '../../randomColor';

export const StatisticsItem = ({ item: { id, label, percentage } }) => {
  return (
    <StyledStatItem id={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StyledStatItem>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};