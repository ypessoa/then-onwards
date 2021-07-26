import styles from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="wrapper flex">
        <div className={styles.deck}>
          <p>
            a pair of <br />
            interactive images.
          </p>
        </div>
      </div>
    </section>
  );
}
