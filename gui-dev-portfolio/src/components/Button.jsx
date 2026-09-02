export const Button = ({ className = "", tamanho="default", children}) => {
    const classesBase = "rounded-full focus-visible:ring-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 cursor-pointer"

    const classesTamanho = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }

    const classes = `${classesBase} ${classesTamanho[tamanho]} ${className}`

    return(
        <button className={classes}>
            <span className="flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};