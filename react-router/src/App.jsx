import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className={styles.App}>
      <h2>HOME</h2>
      <div className={styles.wrapper}>
        <h1>
          WELCOME TO <span>MAGIC</span> REACT ROUTER
        </h1>
        <div className={styles.btns}>
          <Link to="/users">
            <button>USERS</button>
          </Link>
          <Link to="/posts">
            <button>POST</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
