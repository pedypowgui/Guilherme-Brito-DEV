import { Header } from "@/layout/Header.jsx"
import { Hero } from "@/sections/Hero.jsx"
import { Sobre } from "@/sections/Sobre.jsx"
import { Projetos } from "@/sections/Projetos.jsx"
import { Contatos } from "@/sections/Contatos.jsx"

function App() {
  return(
    <div className="min-h-screen overflow-x-hidden">
      <Header/ >
      <main>
        <Hero/ >
        <Sobre/ >
        <Projetos/ >
        <Contatos/ >
      </main>
    </div>
  )
}

export default App
