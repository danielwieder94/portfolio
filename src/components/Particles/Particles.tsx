import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  // const particlesLoaded = useCallback(async (container: any) => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#000",
          },
          image: "url('https://particles.js.org/images/background3.jpg')",
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 60,
                smooth: 100,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              lineLinked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 250,
              size: 50,
              duration: 2,
              opacity: 1,
              speed: 1,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          number: {
            value: 150,
            limit: 400,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 5 },
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },

        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0,
              },
            },
            opacity: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
