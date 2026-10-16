interface FejlecProps {
    feladatNeve: string;
    
}

const Fejlec = ({feladatNeve}: FejlecProps) => {
    return (
        <header>
            <h2>{feladatNeve}</h2>
            
        </header>
    )
}

export default Fejlec;