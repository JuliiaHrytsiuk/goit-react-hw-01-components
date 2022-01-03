import propTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import { Friends, FriendId } from "./FriendList.styled";

function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map((friend) => (
        <FriendId key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </FriendId>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.node,
    })
  ),
};

export default FriendList;
