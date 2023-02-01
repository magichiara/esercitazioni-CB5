import styles from "./styles.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { Fragment } from "react";
import Footer from "@/components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
