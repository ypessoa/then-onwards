import styles from "./layout.module.scss";
import { Header } from "../../molecules/header/Header";
import { HeroSection } from "../../organisms/hero-section/HeroSection";
import { SceneSection } from "../../organisms/scene-section/SceneSection";

export function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <HeroSection />
      <SceneSection />
      {children}
    </div>
  );
}
