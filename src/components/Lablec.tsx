interface LablecProps {
    feladatNeve: string;
    feladatKeszitoje: string;
}

const Lablec = ({feladatNeve,feladatKeszitoje}: LablecProps) => {
    return (
        <header>
            <p>{feladatNeve}</p>
            <p>{feladatKeszitoje}</p>
        </header>
    )
}

export default Lablec;