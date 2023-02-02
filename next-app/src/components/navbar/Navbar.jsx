import styles from "./styles.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.main}>
      <h2>NEXTJS PROJECT</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
