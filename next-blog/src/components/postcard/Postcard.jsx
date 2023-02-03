import styles from "./styles.module.scss";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
const Postcard = ({ posts }) => {
  return (
    <Link className={styles.links} href={`post/${posts.id}`}>
      <div className={styles.main}>
        <h3>{posts.title}</h3>
        <div className={styles.tags}>
          {posts.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
        <div className={styles.like}>
          <AiOutlineHeart />
          <p>{posts.reactions}</p>
        </div>
      </div>
    </Link>
  );
};

export default Postcard;
