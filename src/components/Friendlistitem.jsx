import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <div>
            <span className={
                clsx("status", isOnline ? "isOnline" : "isOffline" )
            }></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{ name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
}