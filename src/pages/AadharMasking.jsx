import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";
import { Link } from "react-router-dom";
import "../App.css"

class AadharMasking extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
            window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="mt-24" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        Aadhar Masking
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <Link to="/demo"><h2 className="text-gray-500 mt-10 hover:text-[#e27daa] text-xl font-myfont border-b border-[#e27daa] cursor-pointer w-fit mx-auto">Schedule a Demo</h2></Link>
                <div className="text-container w-fit mx-auto border-2">
                    <p className="animated-text">Click above to Schedule a Demo</p>
                </div>


                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">Aadhar Maasking</h1>
                        <p className="mt-4"><span className="text-black text-2xl">Reg</span><span className="text-[#e27daa] text-2xl">Tech</span> Data Masking API covers the Aadhaar Numbers to make Aadhaar cards usable as Officially Valid Documents (OVDs)</p>
                        <p className="mt-6">It is the best example of data masking API compared to the other running in the market. The Aadhaar masking provides the full security to the UIDAI information printed on the card as it conceals the first 8 digits and reveals only the last four digits, which is allowed by the RBI as OVD.</p>
                        <p className="mt-6">This image can be stored for your KYC records to get consistent with the most recent guidelines.</p>
                    </div>
                    <img
                        src="aadharmasking/mask-adhar.png"
                        alt="Image 1"
                        className="md:w-1/3 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='aadharmasking/precisely-accurate.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Precisely Accurate</h2>

                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='aadharmasking/realtime-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Real time</h2>

                            </div>
                        </div>
                    </div>



                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='aadharmasking/trusted-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Trusted</h2>

                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='aadharmasking/image-format-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Supports all image formats</h2>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default AadharMasking;