import '../App.css';
import AnimatedWave from "../AnimatedWave";

export default function Home() {
    return (
        <>
            <header className="App-header">
                <div className='Title-align'>
                    <div className='Image-cropper'>
                        {/* <img src={} alt="avatar" style={{width:"300px"}}/> */}
                    </div>
                </div>
                <h1 className='Title-align'>
                    Claudia Tugulan
                </h1>
                <h4 className='Title-align'>
                    Physics/ML PhD Student @ The University of Western Ontario
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
            {/* <div className='Body-text'>
                <div className='Body-long'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div> */}
        </>
    )
}