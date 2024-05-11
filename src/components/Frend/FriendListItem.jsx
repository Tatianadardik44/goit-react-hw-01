const FriendListItem = ({ friend }) => {
    
    return (
        <div>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <p>{friend.name}</p>
            <p>{friend.isOnline ? 'online' : 'offline'}</p>
        </div>)

};
export default FriendListItem