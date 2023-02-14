import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import user from "../user.json"
import data from "../data.json"

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
    </div>
  );
};
