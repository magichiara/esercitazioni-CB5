import { GET } from "@/utils/https";
import styles from "@/styles/Posts.module.scss";
import Postcard from "@/components/postcard/Postcard";
import MainLayout from "@/layouts/mainlayout/MainLayout";
import { Main } from "next/document";

const Posts = ({ posts }) => {
  return (
    <MainLayout>
      <div className={styles.Posts}>
        {posts.map((item) => (
          <Postcard key={item.id} posts={item} />
        ))}
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const data = await GET("posts");
  console.log(data);

  return {
    props: {
      posts: data.posts,
    },
  };
};

export default Posts;
