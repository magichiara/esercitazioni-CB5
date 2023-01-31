import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <Fragment>
      <div className={styles.Layout}>
        <Header />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
