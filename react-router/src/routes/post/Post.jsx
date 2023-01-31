import styles from "./styles.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../utils/https.js";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const Post = () => {
  let { postId } = useParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    GET("posts", postId).then((data) => setPostData(data));
  }, [postId]);

  const prevHandler = () => navigate(`/posts/${parseInt(postId) - 1}`);
  const nextHandler = () => navigate(`/posts/${parseInt(postId) + 1}`);

  return (
    <div className={styles.Post}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h2>{postData?.id}</h2>
          <h3>{postData?.title}</h3>
        </div>
        <div className={styles.body}>
          <p>{postData?.body}</p>
        </div>
      </div>
      <div className={styles.btns}>
        <button disabled={postId == 1 ? true : false} onClick={prevHandler}>
          <GrFormPreviousLink />
        </button>
        <button onClick={nextHandler}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default Post;
