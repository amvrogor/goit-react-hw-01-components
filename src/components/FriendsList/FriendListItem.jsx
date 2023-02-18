import PropTypes from 'prop-types';
import { Status, Image, NameText } from './FriendsList.styled';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <>
            <Status isOnline={isOnline===true}></Status>
            <Image src={avatar} alt={name}/>
            <NameText>{ name}</NameText>
        </>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
}
