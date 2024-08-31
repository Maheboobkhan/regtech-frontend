import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";

class OfflineAadhar extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="mt-24 font-myfont" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        Offline Aadhar
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">RegTech Offline Aadhaar KYC for enterprises</h1>
                        <p className="mt-4">KYC Aadhaar is the paperless Aadhaar Offline based KYC arrangement, for enterprise searching for an option for Aadhaar based eKYC and for the individuals who are attempting to automate their client on-boarding and confirmation process utilizing their application or web-based interface.</p>

                        <h1 className="text-lg mt-6 sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">How it works</h1>
                        <p className="mt-4">Client downloads offline Aadhaar from UIDAI and shares it with you which validates and confirms customers identity</p>
                    </div>
                    <img
                        src="offlineAadhar/offlineaadhar.png"
                        alt="Image 1"
                        className="md:w-1/3 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='offlineAadhar/privacy.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Privacy</h2>
                                <p className="text-base sm:text-lg">No biometrics required for such verification</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='offlineAadhar/security.jpg'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Security</h2>
                                <p className="text-base sm:text-lg">It is digitally signed by UIDAI to verify authenticity and detect any tampering</p>
                            </div>
                        </div>
                    </div>



                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='offlineAadhar/inclusion.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Inclusion</h2>
                                <p className="text-base sm:text-lg">Aadhaar Paperless Offline e-KYC is voluntary and Aadhaar number holder driven</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='offlineAadhar/Accuracy-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Accuracy</h2>
                                <p className="text-base sm:text-lg">Crosscheck from Government issued ID</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default OfflineAadhar;