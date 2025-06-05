import Spline from "@splinetool/react-spline";
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <section className="w-screen h-screen bg-black flex flex-col md:flex-row relative">

            {/* Intro Section */}
            <div id="intro" className="w-[50%] flex flex-col justify-center items-center">

                <div className="w-[75%]">
                    <h1 className="ml-[10%] text-white text-9xl font-bold">Takreeb</h1>
                </div>

                <div className="w-[75%] flex justify-center">
                    <TypeAnimation
                        sequence={[
                            1000,
                            'Discover Events Near You !',
                        ]}
                        wrapper="p"
                        speed={50}
                        className="text-white font-thin text-lg"
                    />
                </div>

            </div>

            {/* Spline 3D Model */}
            <div className="w-[50%] h-full relative">
                <Spline
                    scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
                    className="flex justify-center items-center"
                />
            </div>

            {/* Top Navbar */}
            <Top />


            {/* Bottom Navbar */}
            <Bottom />

        </section>
    );
}
