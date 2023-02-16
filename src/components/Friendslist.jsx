import PropTypes from 'prop-types';
import { FriendListItem } from './Friendlistitem';

export const FriendsList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="item">
                    <FriendListItem friend={friend}/>
                </li>))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}