import "./App.css";
import { useState } from "react";
import { FriendList } from "./components/friend-list/FriendList";
import { Header } from "./components/header/Header";
import { NewTweet } from "./components/new-tweet/NewTweet";
import { TweetList } from "./components/tweet-list/TweetList";
import { TrendList } from "./components/trend-list/TrendList";
import { Navbar } from "./components/navbar/Navbar";
import { Modal } from "./components/modal/Modal";
import { Searchbar } from "./components/searchbar/Searchbar";

const App = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");

  const modalHandler = () => {
    setModal((prevstate) => !prevstate);
    console.log("eduardo");
  };

  return (
    <div className="App">
      <Navbar modalHandler={modalHandler} />
      <Header />
      <div className="wrapper">
        <div className="left-section">
          <FriendList />
        </div>
        <div className="main-section">
          <NewTweet />
          <Searchbar setFilter={setFilter} />
          <Modal
            children={<NewTweet />}
            modalstate={modal}
            modalHandler={modalHandler}
          />
          <TweetList filter={filter} />
        </div>
        <div className="right-section">
          <TrendList />
        </div>
      </div>
    </div>
  );
};

export default App;
