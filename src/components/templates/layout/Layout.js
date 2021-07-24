import styles from "./layout.module.scss";
import { Header } from "../../molecules/header/Header";
import { Hero } from "../../organisms/hero/Hero";
import { SceneSection } from "../../organisms/scene-section/SceneSection";

export function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <SceneSection />
      {children}
    </div>
  );
}
