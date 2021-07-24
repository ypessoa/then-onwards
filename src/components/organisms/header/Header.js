import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.title}>
        <h1>then & onwards</h1>
      </div>
      <div className={styles.credit}>
        by yasmin
      </div>
    </header>
  );
}
