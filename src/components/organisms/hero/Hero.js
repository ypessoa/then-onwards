import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.arrow}>↓</div>
      <div className={styles.deck}>a pair of <br />interactive images.</div>
    </section>
  );
}
