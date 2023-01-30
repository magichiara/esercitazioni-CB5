import styles from "./styles.module.scss";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import UsersItems from "./usersitem/UsersItems";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setUsersList(data.users));
  }, []);

  return (
    <div className={styles.Users}>
      <Header />
      <div className={styles.wrapper}>
        <h2>USERS</h2>
        <div className={styles.container}>
          {usersList.map((item, index) => (
            <UsersItems data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
