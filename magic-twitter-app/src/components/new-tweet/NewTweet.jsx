import { useState } from "react";
import "./new-tweet.scss";

export const NewTweet = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tweet);
  };

  return (
    <div className="NewTweet">
      <form onSubmit={handleSubmit}>
        <div>
          <img src="src/assets/profile_img.jpg" alt="profile-img" />
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
            value={tweet}
            onChange={handleTweetChange}
          />
        </div>
        <input className="btn" type="submit" value="Tweet" />
      </form>
    </div>
  );
};
