import styles from "./layout.module.scss";
import { Header } from "../../organisms/header/Header";
import { Hero } from "../../organisms/hero/Hero";

export function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      {children}
    </div>
  );
}
