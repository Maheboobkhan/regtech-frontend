import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";

class Enach extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="mt-24 font-myfont text-sm" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        e-NACH/e-Mandate
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-[#e27daa]">Easily Handle Recurring Payments With NACH Debit</h1>
                        <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium leading-6 mb-2 text-[#e27daa]">Handle your recurring payments and schedule your premium payments easily using our e-Nach Service.</h1>
                        <p className="mt-4 leading-8 tracking-widest">Our simple online process helps customers to keep track of individual premium payments. RegTech is well reputed in providing easier, cheaper, faster and safer paperless transaction between banks and customers. Our Nach platform provides simple dashboards, rest APIs and mobile SDKs for easy management of subscriptions, mandates, payments, and settlements. We help customers to create plans for variable amounts and ad-hoc payments. Our e-Nach and e-Mandates do not involve cheques, cash, and digital wallets.</p>
                    </div>
                    <img
                        src="enach\enach.jpg"
                        alt="Image 1"
                        className="md:w-1/3 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='enach/api.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">API's & SDK's</h2>
                                <p className="text-sm w-fit sm:text-sm">Consistently integrable APIs and SDKs for realtime results</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='enach/workflow.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">WorkFlows</h2>
                                <p className="text-sm sm:text-sm w-fit">A workflow consists of an orchestrated and repeatable pattern of activity, enabled by the systematic organization.</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-end md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='enach/audit.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Audit and Compilance</h2>
                                <p className="text-sm sm:text-sm w-fit">Processes consistent with government and industry models, and reports prepared for comprehensive audits</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='enach/shield.jpg'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Security</h2>
                                <p className="text-sm sm:text-sm w-fit">Invulnerable information security and complete lawful and statutory compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default Enach;