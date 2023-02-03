import Navbar from "@/components/navbar/Navbar";
import styles from "./styles.module.scss";
import { navbarLinks } from "@/mocks/links";

const mainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default mainLayout;
