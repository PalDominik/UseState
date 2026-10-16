import { useState } from "react";

let ColorChanger = () => {
    const [hatterSzin,setHatterszin] = useState("30,30,255")
    const [betuSzin, setBetuSzin] = useState(255);
    let handleHatterszin = () => {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let seged = (r + g + b)/3;
        if(seged > 127)
        {
            setBetuSzin(0);
        }
        else{
            setBetuSzin(255)
        }
        let hatterKombinacio = `${r},${g},${b}`;

        setHatterszin(hatterKombinacio);
    }

    return <>
    <div style={{backgroundColor: `rgb(${hatterSzin})`,
    color: `rgb(${betuSzin},${betuSzin},${betuSzin})`
}}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, harum rerum.</p>
        <button onClick={handleHatterszin}>Új háttér</button>
    </div>
    </>
}

export default ColorChanger;