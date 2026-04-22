import { useEffect } from "react";
import { useState } from "react";

const Lights = () => {
    let [color, setColor] = useState("red");
    let [isRunning, setIsRunning] = useState(false);
    let [lessColor, setLessColor] = useState(false);

    const lightStyle = (lightColor) => ({
    width: "100px",
    height: "100px",
    display: "flex",
    backgroundColor: lightColor,
    borderRadius: "50%",
    margin: "5px auto",
    opacity: color === lightColor ? 1 : 0.3
    });

    const trafficLightsStyle = {
    background: "#222",
    padding: "10px",
    borderRadius: "10px",
    width: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "10%",
    left: "47%",
    position: "absolute",
    };

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setColor(prevColor => {
                if (prevColor === "red") return "yellow";
                if (prevColor === "yellow") return "green";
                if (prevColor === "green") return "red";
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
            <div className="container" style={{backgroundColor: "white", height:"100vh"}}>
                
                <div className="traffic-lights" style={trafficLightsStyle}>

                <button onClick={() => setColor("red")} style={lightStyle("red")}></button>
                <button onClick={() => setColor("yellow")} style={lightStyle("yellow")}></button>
                <button onClick={() => setColor("green")} style={lightStyle("green")}></button>
            </div>

                <button onClick={() => setIsRunning(!isRunning)} style={{position: "relative", top: "51%", left: "46.25%", background: "#222", color: "white", borderRadius: "1px", width: "100px"}}>{isRunning ? "Stop" : "Alternate"}</button>
        </div>
    );
};

export default Lights;