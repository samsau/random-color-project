import { useEffect, useState } from "react";

export function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('Hex');
    const [color, setColor] = useState('#000000');

    function generatorUtility(len) {
        return Math.floor(Math.random() * len);
    } 

    function handleGenerateHexColor() {
        const num = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
        let hexColor = "#";
        for(let i=0;i<6;i++){
            hexColor+=num[generatorUtility(num.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    function handleGenerateRgbColor() {
        let r = generatorUtility(256);
        let g = generatorUtility(256);
        let b = generatorUtility(256);
        var rgb = `RGB(${r},${g},${b})`;
        console.log(rgb);
        setColor(rgb);

    }

    useEffect(() => {
        if(typeOfColor === "Hex") handleGenerateHexColor(); 
        else handleGenerateRgbColor();
    }, [typeOfColor]);
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor("Hex")}>Hex Color</button>
            <button onClick={() => setTypeOfColor("Rgb")}>Rgb Color</button>
            <button onClick={() => typeOfColor === "Hex" ? handleGenerateHexColor() : handleGenerateRgbColor()}>Random Color</button>
        <div style={{display:"flex", alignContent: "center", fontSize: "30px"}}>
            <h3>
                { typeOfColor === "Rgb" ? "RGB Color" : "HEX Color" }
            </h3>
            <h2>
                {color};
            </h2>
        </div>
        </div>
    )
}