import css from './Frend.module.css'
const FriendListItem = ({ friend }) => {
    
    return (
        <div className={css.box}>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
            <p className={`${css.stats} ${friend.isOnline ? css.online:css.offline}`}>{friend.isOnline ? 'online' : 'offline'}</p>
        </div>)

};
export default FriendListItem