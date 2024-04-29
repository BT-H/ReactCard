import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
import "./user.css";
import user from "./user.json";

export default function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        age={user.age}
        phone={user.phone}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        phone={user.phone}
        address={user.address}
      />
    </div>
  );
}
