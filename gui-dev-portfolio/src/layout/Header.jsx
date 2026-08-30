import { Button } from "@/components/Button.jsx"

const navLinks = [
    {href: "#Sobre", label: "Sobre"},
    {href: "#Projetos", label: "Projetos"},
    {href: "#Contatos", label: "Contatos"}
]

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold hover:text-primary">
                    GB
                </a>

                {/* Navbar para desktop */}
                <div className="flex items-center gap-1">
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
                <div>
                    <Button texto="Contate-me" tamanho="sm"></Button>
                </div>
            </nav>
        </header>
    )
}