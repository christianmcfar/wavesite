import AnimatedWave from "../AnimatedWave";

export default function Research() {
    return (
        <>
            <header className="App-header">
                <h4 className='Title-align'>
                    Research
                </h4>
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
        </>
    )
}