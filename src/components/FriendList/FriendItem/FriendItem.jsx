import PropTypes from 'prop-types';
import { StatusStyled, StyledFriendItem } from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <StyledFriendItem>
      <StatusStyled isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </StyledFriendItem>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};