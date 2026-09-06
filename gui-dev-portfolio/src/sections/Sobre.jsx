// Icones
import { LuCodeXml } from "react-icons/lu";
import { LuBot } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";

export const Sobre = () => {
    return (
        <section id="sobre" className="overflow-hidden relative container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-20 animate-fade-in animation-delay-800">
            {/* Coluna esquerda */}
            <article>
                <span className="uppercase text-primary text-sm">Sobre mim</span>
                
                <h1 className="text-5xl text-primary font-bold py-10">Construindo e inovando, <span className="text-white font-normal font-serif italic">um passo de cada vez</span></h1>
                
                <div className="space-y-3 text-muted-foreground">
                    <p>
                        Sou estudante de Análise e Desenvolvimento de Sistemas. Me apaixonei pela tecnologia assim que vi nela uma maneira de criar soluções para problemas reais, onde descrobri uma maneira de expressar toda minha criatividade e pensamento inovador.
                    </p>
                    <p>
                        Direciono meus estudos para novas tecnologias, como Node.js, React, Tailwind, Java Spring e Agentes de IA. 
                    </p>
                    <p>
                        Procuro sempre participar de atividades como campeonatos de lógica de programação, Hackatons, iniciação científica e realizar projetos pessoais com amigos e para a comunidade.
                    </p>
                </div>

                <div className="glass p-5 rounded-3xl mt-10 glow-border">
                    <span className="italic font-serif">"Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas se tornam difíceis.”<br /> — Sêneca</span>
                </div>
            </article>

            {/* Coluna direita */}
            <div className="overflow-hidden relative grid md:grid-cols-2 gap-5 items-center mt-20 px-4 py-8">
                <div className="glass space-y-2 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/40 hover:scale-103 transition duration-400">
                    <LuCodeXml size={40} className="p-2 rounded-md text-primary bg-teal-800/20"/>
                    <h4 className="font-bold text-lg">Código limpo</h4>
                    <p className="space-y-3 text-muted-foreground">Escrevendo códigos de fácil manutenção, escaláveis e seguindo as melhores práticas do mercado</p>
                </div>
                <div className="glass space-y-2 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/40 hover:scale-103 transition duration-400">
                    <LuBot size={40} className="p-2 rounded-md text-primary bg-teal-800/20"/>
                    <h4 className="font-bold text-lg">Agentes de IA</h4>
                    <p className="space-y-3 text-muted-foreground">Escrevendo códigos de fácil manutenção, escaláveis e seguindo as melhores práticas do mercado</p>
                </div>
                <div className="glass space-y-2 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/40 hover:scale-103 transition duration-400">
                    <LuLightbulb size={40} className="p-2 rounded-md text-primary bg-teal-800/20"/>
                    <h4 className="font-bold text-lg">Inovação</h4>
                    <p className="space-y-3 text-muted-foreground">Escrevendo códigos de fácil manutenção, escaláveis e seguindo as melhores práticas do mercado</p>
                </div>
                <div className="glass space-y-2 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/40 hover:scale-103 transition duration-400">
                    <LuRocket size={40} className="p-2 rounded-md text-primary bg-teal-800/20"/>
                    <h4 className="font-bold text-lg">Evolução</h4>
                    <p className="space-y-3 text-muted-foreground">Escrevendo códigos de fácil manutenção, escaláveis e seguindo as melhores práticas do mercado</p>
                </div>                
            </div>
        </section>
    )
} 