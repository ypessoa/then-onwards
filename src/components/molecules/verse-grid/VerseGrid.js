import styles from "./verse-grid.module.scss";

export function VerseGrid({ sceneData, items, handleItems, kind }) {
  return (
    <div className={`${styles["verse-grid"]} ${styles[kind]}`}>
      {sceneData.verses.map((verse, i) => (
        <div
          className={`${styles.verse} ${
            items.includes(verse.item) ? styles.open : ""
          }`}
          key={i}
        >
          <div
            className={styles.swatch}
            style={{ backgroundColor: verse.swatch }}
            onClick={() => handleItems(verse.item)}
          />
          <p>{verse.text}</p>
        </div>
      ))}
    </div>
  );
}
