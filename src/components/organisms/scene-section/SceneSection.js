import styles from "./scene-section.module.scss";
import { Artwork } from "../../molecules/artwork/Artwork";
import { data } from "../../../data";
import { useState } from "react";
import { VerseGrid } from "../../molecules/verse-grid/VerseGrid";

export function SceneSection({ kind }) {
  const [items, setItems] = useState([]);

  function handleItems(name) {
    if (items && items.includes(name)) {
      setItems(items.filter((n) => n !== name));
    } else {
      setItems([...items, name]);
    }
  }

  return (
    <section className={`${styles.scene} ${styles[kind]}`}>
      <div className="wrapper flex">
        <div className={styles["text-content"]}>
          <VerseGrid
            items={items}
            handleItems={handleItems}
            sceneData={data[kind]}
            kind={kind}
          />
        </div>
        <div className={styles["artwork-wrapper"]}>
          <Artwork
            items={items}
            handleItems={handleItems}
            sceneData={data[kind]}
          />
        </div>
      </div>
    </section>
  );
}
