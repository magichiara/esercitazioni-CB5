import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
const PostItem = ({ data }) => {
  const navigate = useNavigate();

  const redirectHandler = (url) => {
    navigate(url);
  };

  return (
    <div className={styles.PostItem}>
      <h2>{data?.id}</h2>
      <div className={styles.info}>
        <p>{data?.title}</p>
        <button onClick={() => redirectHandler(`${data.id}`)}>READ MORE</button>
      </div>
    </div>
  );
};

export default PostItem;
