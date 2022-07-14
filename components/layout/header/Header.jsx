import { Layout } from "antd";
import ProfileAvatar from "./Avatar";
import styles from "./Header.module.css";
import Lang from "./Lang";

export default function Header() {
  const { Header } = Layout;
  return (
    <>
      <Header>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.headerRightSide}>
          <ProfileAvatar className={styles.avatar} />
          <Lang className={styles.lang} />
        </div>
      </Header>
    </>
  );
}
