import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.main}>
      <div>
        artwork & site <br />
        by <a href="yasmins.site">yasmin pessoa</a>
      </div>
    </footer>
  );
}
