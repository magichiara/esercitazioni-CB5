import styles from "./styles.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
