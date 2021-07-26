import styles from "./hero-section.module.scss";
import { Orbs } from "../../molecules/orbs/Orbs";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Orbs />
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
