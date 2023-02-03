import styles from "@/styles/SinglePost.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/https";
import MainLayout from "@/layouts/mainlayout/MainLayout";
import { AiOutlineHeart } from "react-icons/ai";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (router.isReady) GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);
  return (
    <MainLayout>
      <div className={styles.main}>
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
        <div className={styles.tags}>
          {postData?.tags?.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
        <div className={styles.like}>
          <AiOutlineHeart />
          <p>{postData.reactions}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SinglePost;
