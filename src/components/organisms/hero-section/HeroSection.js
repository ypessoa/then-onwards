import styles from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.arrow}>↓</div>
      <div className={styles.deck}>a pair of <br />interactive images.</div>
    </section>
  );
}
