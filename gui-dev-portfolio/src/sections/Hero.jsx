// Imagens
import HeroBg1 from "../assets/hero/bg-1.webp"
import HeroBg2 from "../assets/hero/bg-2.webp"
import HeroBg3 from "../assets/hero/bg-3.webp"
import HeroBg4 from "../assets/hero/bg-4.webp"

// Componentes
import { Button } from "../components/Button"
import { BotaoAnimado } from "../components/BotaoAnimado"
 
// Icones
import { FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { LuDownload } from "react-icons/lu"

export const Hero = () => {
    const skills = [
        "React",
        "C++",
        "Node.js",
        "Spring Boot",
        "C#",
        "Python",
        "Tailwind",
        "MongoDB",
        "C",
        "MySQL",
        "Express",
        "Prisma",
        "Github",
        "Git",
        "Agentic AI",
        "AWS",
        "Kotlin"
    ]

    return (
        <section>
            {/* Imagem de fundo estrelada fixa*/}
            <div className="absolute inset-0 overflow-hidden h-screen">
                <img src={HeroBg1} alt="Espaço sideral estrelado" className="absolute w-full h-full object-cover opacity-60"/>
            </div>
            {/* Imagem de fundo planetas com efeito parallax*/}
            <figure className="absolute inset-0 overflow-hidden h-screen" id="smooth-content">
                <img src={HeroBg4} alt="Planeta medio" className="absolute w-full h-full object-cover" data-speed="1.5"/>
                <img src={HeroBg2} alt="Planeta gigante e esverdeado" className="absolute w-full object-cover md:-translate-y-40" data-speed="1.1"/>
                <img src={HeroBg3} alt="Planeta pequeno" className="absolute top-50 w-full h-full object-cover" data-speed="1.3"/>
                <div className="absolute inset-0 bg-gradient-to-b via-background/20 to-background"></div>
            </figure>

            {/* Estrelas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" data-speed="1.2">
                {[...Array(90)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-pulse opacity-100 brilho" 
                        style={{
                            backgroundColor: "#99ffec9a",
                            left: `${Math.random() * 99}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Conteúdo */}
            <article className="container mx-auto px-6 pt-40 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Coluna esquerda */}
                    <div className="pt-40 space-y-4 animate-fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight ">
                            Onde <span className="text-primary text-glow">ideias</span> se
                            <br />
                            tornam <span className="font-serif italic font-normal text-white">realidade.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                            Olá, me chamo Guilherme Brito. Sou desenvolvedor de <span className="font-serif italic">software</span> com foco em <span className="font-serif italic">React, Node.js e Java Spring</span>. Estou me aprofundando em IA e automação enquanto busco minha primeira oportunidade no mercado de trabalho.
                        </p>
                        
                        {/* Botoes */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animated-delay-300">
                            <Button tamanho="lg">Entrar em contato<FaArrowRight size={18}/></Button>
                            <BotaoAnimado href="https://drive.google.com/file/d/1QS7WdTcjzBpiDQulEknaeuVJpIxqWhWJ/view?usp=sharing">Baixar currículo<LuDownload size={20}/></BotaoAnimado>
                        </div>

                        {/* Redes sociais */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Siga-me: </span>
                            <a href="https://github.com/pedypowgui" 
                               className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                               target="_blank">
                                    <FiGithub className="p-1" size={30}/>
                            </a>
                            <a href="https://linkedin.com/in/guilhermebritodossantos" 
                               className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                               target="_blank">
                                    <SlSocialLinkedin className="p-1" size={30}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-10 animate-fade-in animation-delay-600">
                    <p className="text-sm flex justify-center text-muted-foreground mb-6">
                        <MdKeyboardDoubleArrowDown className="animate-pulse" size={20}/> Minhas habilidades <MdKeyboardDoubleArrowDown className="animate-pulse" size={20}/>
                    </p>
                    <div className="relative overflow-hidden mask-x-from-70%">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
} 