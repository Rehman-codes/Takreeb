import Spline from "@splinetool/react-spline";
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";
import { TypeAnimation } from 'react-type-animation';
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contact";

export default function Home() {
    return (
        <main className="bg-black">
            <section className="w-full h-screen bg-black flex flex-col md:flex-row relative">

                {/* Intro Section */}
                <div id="intro" className="w-full md:w-[50%] flex flex-col justify-center items-center px-4 md:px-0">

                    <div className="w-full md:w-[75%]">
                        <h1 className="text-center md:text-left text-white text-5xl md:text-9xl font-bold">Takreeb</h1>
                    </div>

                    <div className="w-full md:w-[75%] flex justify-center">
                        <TypeAnimation
                            sequence={[
                                1000,
                                'Discover Events Near You !',
                            ]}
                            wrapper="p"
                            speed={50}
                            className="text-white font-thin text-sm md:text-lg text-center"
                        />
                    </div>

                </div>

                {/* Spline 3D Model */}
                <div className="w-full md:w-[50%] h-[50vh] md:h-full relative">
                    <Spline
                        scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
                        className="flex justify-center items-center h-full"
                    />
                </div>

                {/* Top Navbar */}
                <Top />

            </section>
            
            <Events />
            <Contact />
            
            {/* Bottom Navbar */}
            <Bottom />
        </main>
    );
}
