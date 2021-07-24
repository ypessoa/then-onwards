import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.title}>
        <h1>then</h1>
      </div>
      <div className={styles.byline}>
       onwards
      </div>
    </header>
  );
}