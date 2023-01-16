import { useState } from "react";
import "./new-tweet.scss";

export const NewTweet = () => {
  const [tweet, setTweet] = useState("");

  const onHandleInput = (event) => {
    setTweet(event.target.value);
    console.log(tweet);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="NewTweet">
      <form onSubmit={onHandleSubmit}>
        <div>
          <img src="src/assets/profile_img.jpg" alt="profile-img" />
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
            onChange={onHandleInput}
            value={tweet}
          />
        </div>
        <input className="btn" type="submit" value="Tweet" />
      </form>
    </div>
  );
};
