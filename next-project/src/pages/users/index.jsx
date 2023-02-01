import styles from "../../styles/Pages.module.scss";
import MainLayout from "@/layouts/mainLayout";

export const Users = ({ users }) => {
  return (
    <MainLayout>
      <div className={styles.Users}>
        {users &&
          users.map((item, index) => (
            <div className={styles.User} key={index}>
              <img src={item.image} alt={item.username} />
              <h4>
                {item.firstName} {item.lastName}
              </h4>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

const USERS_URL = "https://dummyjson.com/users";

export const getStaticProps = async () => {
  const res = await fetch(USERS_URL);
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },
  };
};

export default Users;
