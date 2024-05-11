import FriendListItem from "./FriendListItem"
import css from "./Frend.module.css"
const FriendList = ({ friends }) => {
    return (
        <ul className={css.conteiner}>
            {friends.map((friend) => {
                return <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            })}
        </ul>
    );
};
export default FriendList