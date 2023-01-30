import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const UsersItems = ({ data }) => {
  const navigate = useNavigate();

  const redirectHandler = (url) => {
    navigate(url);
  };

  return (
    <div className={styles.Usersitem}>
      <img src={data.image} alt={data.username} />
      <div className={styles.info}>
        <h4>
          {data.firstName} {data.lastName}
        </h4>
        <i onClick={() => redirectHandler(`${data.id}`)}>
          <FaInfoCircle />
        </i>
      </div>
    </div>
  );
};

export default UsersItems;
