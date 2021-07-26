import styles from "./info-dialog.module.scss";
import { InfoIcon } from "../../atoms/info-icon/InfoIcon";
import { useState } from "react";

export function InfoDialog() {
  const [showInfo, toggleInfo] = useState(false);

  return (
    <div className={styles["info-wrapper"]}>
      <button
        className={styles["info-button"]}
        onClick={() => toggleInfo(!showInfo)}
      >
        <InfoIcon />
      </button>
      <div
        className={`${styles["info-dialog"]} ${
          showInfo ? styles.open : styles.closed
        }`}
      >
        some of the objects in the images below are special. find and click on
        them to transform the scenes.
      </div>
    </div>
  );
}
