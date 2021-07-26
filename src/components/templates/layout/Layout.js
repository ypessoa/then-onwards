import styles from "./layout.module.scss";
import { Header } from "../../molecules/header/Header";
import { HeroSection } from "../../organisms/hero-section/HeroSection";
import { SceneSection } from "../../organisms/scene-section/SceneSection";
import { Footer } from "../../organisms/footer/Footer";

export function Layout({ children }) {

  return (
    <div className={styles["layout-wrapper"]}>
      <Header />
      <HeroSection />
      <SceneSection kind="then" />
      <SceneSection kind="onwards" />
      {children}
      <Footer />
    </div>
  );
}
