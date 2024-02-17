import '../App.css';
import AnimatedWave from "../AnimatedWave";

export default function Publications() {
    return (
        <>
            <header className="App-header">
                <h4 className='Title-align'>
                    Publications
                </h4>
                {/* <div className='Body-long'>
                </div> */}
            </header>
            <div style={{ position: "relative" }}>
                <AnimatedWave
                    color={"#ebd6c7"}
                    animationDuration="4s"
                    opacity={"0.8"}
                />
                <AnimatedWave
                    color={"#ddcabb"}
                    animationDuration="12s"
                    opacity={"0.5"}
                />
                <AnimatedWave
                    color={"#f8c2ce"}
                    animationDirection="reverse"
                    animationDuration="10s"
                    opacity={"0.2"}
                />
            </div>
            {/* <div className='Body-text'>
                <div className='Body-long'>
                </div>
            </div> */}
        </>
    )
}