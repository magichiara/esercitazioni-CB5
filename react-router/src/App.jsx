import styles from "./styles.module.scss";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.wrapper}>
        <h2>HOME</h2>
      </div>
    </div>
  );
};

export default App;
