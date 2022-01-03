import Profile from "../Profile/Profile";
import user from "../../user.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import data from "../../data.json";
import Statistics from "../Statistic/Statistics";
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
