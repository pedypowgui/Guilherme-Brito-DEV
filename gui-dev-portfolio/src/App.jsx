// GSAP para efeito parallax
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Secoes
import { Header } from "@/layout/Header.jsx"
import { Hero } from "@/sections/Hero.jsx"
import { Sobre } from "@/sections/Sobre.jsx"
import { Projetos } from "@/sections/Projetos.jsx"
import { Contatos } from "@/sections/Contatos.jsx"

// Efeitos de scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  const smoothWrapper = useRef(null);

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          ScrollSmoother.create({
              wrapper: "#smooth-wrapper",
              content: "#smooth-content",
              smooth: 1,
              effects: true,
              smoothTouch: 0.1,
          });
      }, smoothWrapper);

      return () => ctx.revert();
  }, []);

  return(
    <div className="min-h-screen overflow-x-hidden" id="smooth-wrapper" ref={smoothWrapper}>
      <Header/ >
      <div id="smooth-content">
        <main>
          <Hero/ >
          <Sobre/ >
          <Projetos/ >
          <Contatos/ >
        </main>
      </div>
    </div>
  )
}

export default App
