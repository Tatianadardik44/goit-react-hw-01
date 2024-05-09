import FriendListItem from "./FriendListItem"
const FriendList = ({ friends }) => {
    return (
     <ul>
            {friends.map((friend) => {
       return <li key={friend.id}>
		<FriendListItem />
	</li>
    })}
	
    </ul>

    )

}
export default FriendList