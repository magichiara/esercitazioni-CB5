import styles from "./styles.module.scss";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.imgs}>
        <Image
          src={"https://picsum.photos/300/?random=1"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
        <Image
          src={"https://picsum.photos/300/?random=2"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
        <Image
          src={"https://picsum.photos/300/?random=3"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
        <Image
          src={"https://picsum.photos/300/?random=4"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
        <Image
          src={"https://picsum.photos/300/?random=5"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
        <Image
          src={"https://picsum.photos/300/?random=6"}
          alt="pic"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
};

export default Gallery;
