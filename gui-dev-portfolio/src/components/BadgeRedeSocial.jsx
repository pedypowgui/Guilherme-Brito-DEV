export const BadgeRedeSocial = ({children, href, ...props}) => {
    function redirecionar() {
        window.open(href, "_blank")
    }
    
    return (
        <button onClick={redirecionar} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <span>{children}</span>
        </button>
    )
}