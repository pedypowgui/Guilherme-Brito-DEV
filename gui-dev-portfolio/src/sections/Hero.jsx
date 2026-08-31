import HeroBg from "../assets/hero/hero-bg.png"

export const Hero = () => {
    return (
        <section>
            {/* Imagem de fundo com gradiente */}
            <figure className="absolute inset-0">
                <img src={HeroBg} alt="Foto do espaço sideral com dois planetas" className="w-full h-full object-cover"/>
            </figure>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background"></div>

            {/* Estrelas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(60)].map((_, i) => (
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
        </section>
    )
} 