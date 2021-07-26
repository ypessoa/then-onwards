import Particles from "react-particles-js";
import styles from "./orbs.module.scss";

export function Orbs() {
  return (
      <Particles
      className={styles.orbs}
        params={{
          options: {
            full_screen: {
              enable: false,
              zIndex: 2,
            },
          },
          particles: {
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                opacity: 1,
                color: {
                    value: "#000"
                }
              },
            },
            number: {
              value: 20,
              density: {
                enable: true,
                area: 500,
                factor: 6000,
              },
            },
            color: {
              value: "#f1f5f0",
            },
            size: {
              value: 200,
              random: {
                  enable: true,
                  minimumValue: 25,

              }
            },
            line_linked: {
              enable: false,
            },
            move: {
              //   enable: false,
              speed: 0.25,
            },
            opacity: {
              value: .75,
              anim: {
                enable: false,
              },
            },
          },
          interactivity: {
            detect_on: "parent",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },

            modes: {
              push: {
                particles_nb: 1,
              },
              repulse: {
                distance: 150,
              },
            },
          },
        }}
      />
  );
}
