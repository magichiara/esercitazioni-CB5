import Gallery from "@/components/gallery/Gallery";
import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Gallery.module.scss";

const index = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Gallery />
      </div>
    </MainLayout>
  );
};

export default index;
