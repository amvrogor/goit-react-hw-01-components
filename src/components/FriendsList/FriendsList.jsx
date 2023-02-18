import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends, FriendItem } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendItem key={friend.id} className="item">
          <FriendListItem friend={friend} />
        </FriendItem>
      ))}
    </Friends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
