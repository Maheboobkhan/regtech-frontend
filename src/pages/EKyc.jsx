import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";

class EKyc extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div className="mt-24" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        E-Kyc
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">Know the Customer's Authenticity With Our e-KYC SERVICE.</h1>
                        <p>SEBI registered banking and financial services companies who wants to perform the transaction for investing in the financial market has to follow a process of "Know your client" details of which can be verified and validated through a KRA - 'KYC Registration Agency'. RegTech API service ensure that "Know your client" information is extracted once Pan Card Number and Date of birst is provided.</p>
                    </div>
                    <img
                        src="ekyc/kyc-services.jpg"
                        alt="Image 1"
                        className="md:w-1/4 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='ekyc/newspaper.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Reports and Analytics</h2>
                                <p className="text-base sm:text-lg">Point to point analytics for informed decision making and audit-ready reports.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='ekyc/ai.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Data Science/AI</h2>
                                <p className="text-base sm:text-lg">AI calculations and algorithms for early fraud detection</p>
                            </div>
                        </div>
                    </div>



                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='ekyc/audit.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Audit and Compilance</h2>
                                <p className="text-base sm:text-lg">Processes consistent with government and industry models, and reports prepared for comprehensive audits</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='ekyc/shield.jpg'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Security</h2>
                                <p className="text-base sm:text-lg">Invulnerable information security and complete lawful and statutory compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default EKyc;