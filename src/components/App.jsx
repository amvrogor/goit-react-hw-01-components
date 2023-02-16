import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendsList } from "./Friendslist";
import { TransactionHistory } from "./Transactionhistory";
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
