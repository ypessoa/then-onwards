import styles from "./artwork.module.scss";

export function Artwork({ sceneData, items, handleItems }) {
  console.log(items.length);

  return (
    <figure
      className={styles.artwork}
      style={{ filter: `grayscale(${100 - items.length * 20}%)` }}
    >
      <img src={sceneData.image} alt="description" />
      <div className={styles["hitbox-wrapper"]}>
        {sceneData.areas.map((area, i) => (
          <>
            <div
              className={styles.hitbox}
              key={i}
              style={{
                left: `calc(100% * (${area.left} / 1300))`,
                top: `calc(100% * (${area.top} / 1660))`,
                width: `calc(100% * (${area.width} / 1300 ))`,
                height: `calc(100% * (${area.height} / 1660))`,
              }}
              onClick={() => handleItems(area.name)}
            />
            <div className={styles["prop-images"]} key={`${i}b`}>
              <img
                className={styles.prop}
                src={area.image}
                alt={area.name}
                style={{
                  opacity: items.includes(area.name) ? "1" : "0",
                }}
              />
            </div>
          </>
        ))}
      </div>
    </figure>
  );
}
