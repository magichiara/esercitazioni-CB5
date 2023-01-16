import "./App.css";
import { Header } from "./components/header/Header";
import { NewTweet } from "./components/new-tweet/NewTweet";
import { TweetList } from "./components/tweet-list/TweetList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NewTweet />
      <TweetList />
    </div>
  );
};

export default App;
