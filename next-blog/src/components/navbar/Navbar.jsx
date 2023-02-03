import styles from "./styles.module.scss";
import Link from "next/link";
import { navbarLinks } from "@/mocks/links";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <ul>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
