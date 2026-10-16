import { useState } from "react";
import KepBetolto from "./KepBetolto";

const ReactKapcsolo = () =>{
    const kikapcsoltKep = "https://www.w3schools.com/js/pic_bulboff.gif";
    const bekapcsoltKep = "https://www.w3schools.com/js/pic_bulbon.gif";
    const [bekapcsolva, setBekapcsolva] = useState<boolean>(false)
    const handleKapcsolas = () => {
        // if(bekapcsolva === true) setBekapcsolva(false)
        //     else setBekapcsolva(true);
        setBekapcsolva(!bekapcsolva)
    }
    return <>
        <p>A Kapcsoló állapota:{bekapcsolva ? "Bekapcsolva" : "Kikapcsolva"}</p>
        <KepBetolto imageURL={bekapcsolva? bekapcsoltKep : kikapcsoltKep}></KepBetolto>
        <button onClick={handleKapcsolas}>Kapcsolás</button>
    </>
}

export default ReactKapcsolo;