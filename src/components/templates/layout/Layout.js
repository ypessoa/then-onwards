import styles from "./layout.module.scss";
import { Header } from "../../organisms/header/Header";

export function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}
