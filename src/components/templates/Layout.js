import styles from "./layout.module.scss";

export function Layout({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
