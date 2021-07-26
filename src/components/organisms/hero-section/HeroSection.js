import styles from "./hero-section.module.scss";
import { Orbs } from "../../molecules/orbs/Orbs";
import { InfoDialog } from "../../molecules/info-dialog/InfoDialog";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Orbs />
      <div className="wrapper flex">
        <InfoDialog />
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
