import "./App.css";
import { FriendList } from "./components/friend-list/FriendList";
import { Header } from "./components/header/Header";
import { NewTweet } from "./components/new-tweet/NewTweet";
import { TweetList } from "./components/tweet-list/TweetList";
import { TrendList } from "./components/trend-list/TrendList";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="left-section">
          <FriendList />
        </div>
        <div className="main-section">
          <NewTweet />
          <TweetList />
        </div>
        <div className="right-section">
          <TrendList />
        </div>
      </div>
    </div>
  );
};

export default App;
