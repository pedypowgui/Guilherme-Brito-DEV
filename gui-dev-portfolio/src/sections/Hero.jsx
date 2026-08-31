import HeroBg from "../assets/hero/hero-bg.png"

export const Hero = () => {
    return (
        <section>
            <figure className="absolute inset-0 -z-1">
                <img src={HeroBg} alt="Foto do espaço sideral com dois planetas" className="w-full h-full object-cover"/>
            </figure>

            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background -z-1">

            </div>
        </section>
    )
} 