import styles from "./styles.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { Fragment } from "react";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default MainLayout;
