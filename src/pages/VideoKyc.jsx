import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";

class VideoKyc extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div className="mt-24" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        Video-Kyc
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">Speed up the KYC process With Our Video-KYC SERVICE.</h1>
                        <p className="mt-4"><span className="text-[#e27daa] text-2xl">RegTech Video KYC</span> helps enterprises speed-up customer on-boarding process by automating the document collection and verification processes. RegTech Video KYC includes a live video meeting with a client that builds up their presence during the KYC process, confirming their identity through the RegTech video KYC as per the government ID card and records it with the end goal of review and consistency.</p>
                        <p className="mt-6">The procedure for video KYC can be done anywhere even in the comfort of your own home! All you need is a pc, cell phone, or tablet with a working internet connection Customer onboarding process is extremely fast and reliable. It can eliminate 90% cost over physical verifications process.</p>
                    </div>
                    <img
                        src="videokyc/video-kyc.png"
                        alt="Image 1"
                        className="md:w-1/4 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='videokyc/digital-solution-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">video-kyc</h2>
                                <p className="text-base sm:text-lg">KYC can be possible in the comfort of your home</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='videokyc/Accuracy-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Accuracy</h2>
                                <p className="text-base sm:text-lg">Crosscheck from Government issued ID</p>
                            </div>
                        </div>
                    </div>



                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='videokyc/fast-reliable-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Fast and Reliable</h2>
                                <p className="text-base sm:text-lg">Swift on boarding process</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='videokyc/cost-effective-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Cost effective</h2>
                                <p className="text-base sm:text-lg">Over physical verification process</p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default VideoKyc;