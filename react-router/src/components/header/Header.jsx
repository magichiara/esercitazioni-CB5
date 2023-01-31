import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h2>REACTROUTER</h2>
      <div className={styles.voices}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Header;
