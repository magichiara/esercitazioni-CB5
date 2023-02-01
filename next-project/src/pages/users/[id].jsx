import styles from "../../styles/Pages.module.scss";
import { useRouter } from "next/router";

const Pages = () => {
  const router = useRouter();
  const userid = router.query.id;

  return <div className={styles.Pages}>{userid}</div>;
};

export default Pages;
