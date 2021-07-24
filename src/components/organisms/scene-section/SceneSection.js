import styles from "./scene-section.module.scss";
import { Artwork } from "../../molecules/header/artwork/Artwork";
import { data } from "../../../data";
import { useState } from "react";

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
    <section className={styles.scene}>
      <div className={styles["text-content"]}>text-content</div>
      <div className={styles["artwork-wrapper"]}>
        <Artwork  items={items} handleItems={handleItems} artworkData={data[kind]} />
      </div>
    </section>
  );
}
