import styles from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.arrow}>
        <p>↓</p>
      </div>
      <div className={styles.deck}>
        <p>
          a pair of <br />
          interactive images.
        </p>
      </div>
    </section>
  );
}
