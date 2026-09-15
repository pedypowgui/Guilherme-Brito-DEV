import { useEffect, useState } from "react"


// Componentes
import { Button } from "@/components/Button.jsx"

// icones
import { Menu, X} from "lucide-react"

// Imagens
import Logo from "@/assets/logo.png"

const navLinks = [
    {href: "#Sobre", label: "Sobre"},
    {href: "#Projetos", label: "Projetos"},
    {href: "#Contatos", label: "Contatos"}
]

export const Header = () => {
    const [menuMobileAtivo, setMenuMobileAtivo] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const verificarScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", verificarScroll)

        return () => window.removeEventListener("scroll", verificarScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 py-5 transition-all duration-500 ease-in-out ${scrolled ? "glass-forte" : "bg-transparent"}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#">
                    <img src={Logo} alt="Logo com G e B estilizado" className="w-10"/>
                </a>

                {/* Navbar para desktop */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {/* Imprimindo cada link  */}
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-surface hover:text-foreground"> 
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Botao de contate-me */}
                <div className="hidden md:block">
                    <Button tamanho="sm">Contate-me</Button>
                </div>

                {/* Botao menu mobile */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setMenuMobileAtivo(!menuMobileAtivo)}>
                    {menuMobileAtivo? <X size={24} />: <Menu size={24} />}
                </button>
            </nav>

            {/* Menu mobile */}
            {menuMobileAtivo && <div className="md:hidden glass-forte animate-fade-in">
                <div className="container mx-auto p-6 flex flex-col gap-4">
                    {/* Imprimindo cada link  */}
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2"> 
                            {link.label}
                        </a>
                    ))}

                    <Button size="sm" texto="Contate-me"></Button>
                </div>
            </div>}
        </header>
    )
}