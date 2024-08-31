import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";
import { Link } from "react-router-dom";
import "../App.css"

class DBFMatch extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div className="mt-24 font-myfont text-sm" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        DB Fmatch
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>


                <Link to="/demo"><h2 className="text-gray-500 mt-10 hover:text-[#e27daa] text-xl font-myfont border-b border-[#e27daa] cursor-pointer w-fit mx-auto">Schedule a Demo</h2></Link>
                <div className="text-container w-fit mx-auto border-2">
                    <p className="animated-text">Click above to Schedule a Demo</p>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 text-[#e27daa]">Face Match</h1>
                        <p>Be assure that two pictures are of a similar individual with the best in class RegTech Face Match algorithm using artificial intelligence and machine learning. It verifies, analyses and identifies faces in real-time.</p>
                        <p className="mt-4"><span className="text-xl">Reg</span><span className="text-xl text-[#e27daa]">Tech</span> algorithm excels in every challenging situation including light and angle variability, blur and pixelation, age, and gender.</p>
                        <p className="mt-4"><span className="text-xl">Reg</span><span className="text-xl text-[#e27daa]">Tech</span> empowers enterprises who need face match that is accurate in testing situations to give unrivalled degrees of security, ongoing execution, and can be used in any given conditions.</p>
                        <p className="mt-4"><span className="text-xl">Reg</span><span className="text-xl text-[#e27daa]">Tech</span> Face match helps in protecting individuals and organisations against frauds and mitigations where an attacker is using video, images, or masks to spoof a system 100% Accuracy Industry-leading performance with challenging angles and lighting conditions</p>
                    </div>
                    <img
                        src="DBFmatch/facematch.png"
                        alt="Image 1"
                        className="md:w-1/3 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='DBFmatch/digital-solution-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Well Designed</h2>
                                <p className="text-base sm:text-lg">Easy to use interface</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='DBFmatch/age-estimation-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Age Estimation</h2>
                                <p className="text-base sm:text-lg">Estimates the age of the user</p>
                            </div>
                        </div>
                    </div>



                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='DBFmatch/emotions-detection.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Emotions Detection</h2>
                                <p className="text-base sm:text-lg">Detects through facial expression</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='DBFmatch/affordable-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Affordable</h2>
                                <p className="text-base sm:text-lg">Usage-based pricing</p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default DBFMatch;