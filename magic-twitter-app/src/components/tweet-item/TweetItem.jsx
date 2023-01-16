import "./tweet-item.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/endpoint";

export const TweetItem = ({ data }) => {
  const [user, setUser] = useState({});

  // GET from endpoint USERS
  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="TweetItem">
      <img src={user.image} alt={user.firstName} />
      <div className="tweet-text">
        <h4>@{user.firstName}</h4>
        <p>{data.body}</p>
      </div>
    </div>
  );
};
