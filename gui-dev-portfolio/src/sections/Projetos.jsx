// Imagens
import bwarts from "../assets/capa-projetos/bwarts.png"
import wattiz from "../assets/capa-projetos/wattiz.png"
import crudNode from "../assets/capa-projetos/crud-node.png"

// Icones
import { FiArrowUpRight } from "react-icons/fi"
import { TbBrandGithub } from "react-icons/tb";

const projetos = [
    {
        title: "BWarts - E-commerce de MDF",
        description: "E-commerce de produtos em MDF com plataforma de personalização incluído.",
        image: bwarts,
        tags: ["Bootstrap, JavaScript, Java Spring, Git, Github, MySQL"],
        link: "https://foamyritchi.github.io/BWartsMaker/BWartsMaker/pages/global/",
        github: "https://github.com/orgs/BWarts/repositories"
    },
    {
        title: "Wattiz - Gerenciamento de energia elétrica",
        description: "Sistema de gerencimento de energia elétrica desenvolvido no Instituto Proa.",
        image: wattiz,
        tags: ["React", "Tailwind CSS", "Python", "Ollama", "Agentes de IA", "Java Spring"],
        link: "https://wattiz-oficial.vercel.app/",
        github: "https://github.com/WattizOficial"
    },
    {
        title: "CRUD - Cadastro de perfil com React e Node",
        description: "Cadastro de perfil utilizando tecnologias Node.",
        image: crudNode,
        tags: ["Node.js", "React", "MongoDB", "Prisma", "Express"],
        link: "https://github.com/pedypowgui/Cadastro-usuario-node.js-react",
        github: "https://github.com/pedypowgui/Cadastro-usuario-node.js-react"
    }
]

export const Projetos = () => {
    return (
        <section id="projetos" className="py-32 relative overflow-hidden">
            {/* Efeitos de brilho no background */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            
            {/* Titulo secao */}
            <div className="container mx-auto px-6 relative z-10">  
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">Meus projetos</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary">
                        Projetos que
                        <span className="text-white font-normal font-serif italic"> impactam.</span>
                    </h2>
                    <p className="text-muted-foreground">Coleção de projetos pessoais e acadêmicos que trazem soluções criativas para problemas reais.</p>
                </div>
            </div>

            {/* Projetos */}
            <div className="grid md:grid-cols-2 gap-8">
                {projetos.map((projeto, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden md:row-span-1">
                        {/* imagem */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={projeto.image} alt={projeto.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            {/* Efeito de gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-card/40"></div>
                            {/* Links do projeto */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={projeto.link} target="_blank" className="p-3 rounded-full bg-surface hover:bg-primary transition-all"><FiArrowUpRight size={25}/></a>
                                <a href={projeto.github} target="_blank" className="p-3 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all"><TbBrandGithub size={25}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>  
        </section>
    )
} 