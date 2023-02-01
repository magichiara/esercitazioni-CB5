import styles from "./styles.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h3>
        <Link href="/">HOME</Link>
      </h3>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>Posts</li>
      </ul>
    </div>
  );
};

export default Navbar;
