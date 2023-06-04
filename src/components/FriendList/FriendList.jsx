import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem/FriendItem';
import { StyledList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => (
        <FriendItem friend={friend} key={friend.id} />
      ))}
    </StyledList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};