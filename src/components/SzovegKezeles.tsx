import { useState } from "react";

let SzovegKezeles = () => {

const [szoveg,setSzoveg] = useState<String>("");
const handleABC = () => {
    setSzoveg(szoveg.toUpperCase())
}
const handleabc = () => {
    setSzoveg(szoveg.toLocaleLowerCase())
}

const [boldText, setBoldText] = useState<Boolean>(false)
const handleBold = () => {
    setBoldText(!boldText)
}

const [italicText, setItalicText] = useState<Boolean>(false)
const handleItalic = () => {
    setItalicText(!italicText)
}
const [colorText, setColorText] = useState<Boolean>(false)
const handleColorText = () => {
    setColorText(!colorText)
}



return <>
    <input type="text" style={{fontWeight: (boldText ? "bold":"normal"), fontStyle: (italicText? "italic":"normal") }} value={szoveg} onChange={ (esemeny) =>setSzoveg(esemeny.target.value)}/>
    <button onClick={handleABC}>ABC</button>
    <button onClick={handleabc}>ABC</button>
    <button onClick={handleBold}>Félkövér</button>
    <button onClick={handleItalic}>Dölt</button> <br />
    <button onClick={handleColorText}>Piros kapcsoló</button>


    <p style={{fontWeight: (boldText ? "bold":"normal"), fontStyle: (italicText? "italic":"normal"), color:(colorText ? "#FF0000" : "#000000") }}>{ szoveg}</p>
</>

}

export default SzovegKezeles