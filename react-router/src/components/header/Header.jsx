import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h3>REACTROUTER</h3>
      <div className={styles.voices}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Header;
