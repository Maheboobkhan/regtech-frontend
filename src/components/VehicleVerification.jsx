// import React, { Component } from 'react';
// import { GoPlus } from 'react-icons/go';
// import { HiMinus } from 'react-icons/hi';
// import useWindowSize from './UseWindowSize';

// class VehicleVerification extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             openIndex: null,
//             width: window.innerWidth, // Initialize width
//         };
//     }

//     componentDidMount() {
//         // Add event listener for window resize
//         window.addEventListener('resize', this.handleResize);
//     }

//     componentWillUnmount() {
//         // Clean up event listener
//         window.removeEventListener('resize', this.handleResize);
//     }

//     handleResize = () => {
//         this.setState({ width: window.innerWidth });
//     };

//     toggleFAQ = (index) => {
//         this.setState((prevState) => ({
//             openIndex: prevState.openIndex === index ? null : index,
//         }));
//     };

//     render() {
//         const { openIndex, width } = this.state;
//         const iconSize = width <= 640 ? 14 : 28;

//         const AcquisitionData = [
//             {
//                 title: 'Basic Vehicle RC verification',
//                 content: "It is used to verify the RC details by matching the details obtained from the Ministry of Road, Transport, and highways.",
//             },
//             {
//                 title: 'Advance Vehicle RC Verfication',
//                 content: "The advanced version of the RC verification in which complete details are extracted by only providing RC number, engine number, and chassis number.",
//             },
//         ];
//         const data = [
//             { keyFeature: '✓ Error-proof documentation', perk: "✓ Plug 'N' Play approach" },
//             { keyFeature: '✓ Fraud detection & reporting', perk: '✓ Fast Customer onboarding' },
//             { keyFeature: '✓ Real-time verification & validation', perk: '✓ Cost effective' },
//             { keyFeature: '✓ ✓ Analytics based on AI/Machine Learning', perk: '✓ Time effective' },
//             { keyFeature: '✓ Geotagging & date-time stamp', perk: '✓ Real-time Scheduling' },
//             { keyFeature: '✓ End to end data encryption', perk: '✓ Scalable' },
//             { keyFeature: '✓ Unique payment collection method', perk: '✓ Compilance with Mandate' },
//             { keyFeature: '✓ Impactful Dashboard', perk: '✓ Platform Independent' },
//             { keyFeature: '✓ Efficient report creation and data collection', perk: '' },
//         ];

//         return (
//             <section className="py-10 px-4 md:px-8 bg-white text-gray-900 font-myfont absolute top-[900px] md:top-[1150px] w-full">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl font-bold text-black text-center font-myfont mb-6">
//                         Vehicle Verification
//                     </h2>

//                     <div className="font-myfont max-w-4xl mx-auto w-3/4 md:w-full">
//                         {AcquisitionData.map((faq, index) => (
//                             <div key={index} className="mb-4 border-[1px] border-gray-500 bg-white rounded-xl">
//                                 <div
//                                     className="flex items-center justify-between rounded-xl p-4 bg-[#FFFFFF] cursor-pointer transition-all duration-300 ease-in-out"
//                                     onClick={() => this.toggleFAQ(index)}
//                                 >
//                                     <div className="font-normal text-[0.6rem] md:text-lg text-[#e27daa]">{faq.title}</div>
//                                     <div className="text-gray-600">
//                                         {openIndex === index ? (
//                                             <HiMinus size={iconSize} style={{ color: '#e27daa' }} />
//                                         ) : (
//                                             <GoPlus size={iconSize} style={{ color: '#e27daa' }} />
//                                         )}
//                                     </div>
//                                 </div>
//                                 {openIndex === index && (
//                                     <div
//                                         className={`text-[12px] md:text-sm px-4 pt-1 pb-2.5 bg-white rounded-xl transform transition-all duration-300 ease-in-out opacity-100 translate-y-0`}
//                                     >
//                                         {faq.content}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>



//                     <div className="overflow-x-hidden">



//                         <table className="w-full min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//                             <thead className="bg-[#e27daa] text-white">
//                                 <tr>
//                                     <th className="p-4 text-center text-sm md:text-base">Key Feature</th>
//                                     <th className="p-4 text-center text-sm md:text-base">Perk</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((item, index) => (
//                                     <tr key={index} className="border-b border-gray-200">
//                                         <td className="p-4 text-[10px] md:text-base">
//                                             <div className="bg-[#e27daa] text-white p-4 rounded-lg shadow-md">
//                                                 <p>{item.keyFeature}</p>
//                                             </div>
//                                         </td>
//                                         <td className="p-4 text-[10px] md:text-base">
//                                             <div className="bg-white text-black p-4 rounded-lg border border-gray-200 shadow-md">
//                                                 <p>{item.perk}</p>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </section >
//         );
//     }
// }

// export default VehicleVerification;






























import React, { Component } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

class VehicleVerification extends Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
    }
    constructor(props) {
        super(props);
        this.state = {
            openIndex: null,
            width: window.innerWidth, // Initialize width
        };
    }

    componentDidMount() {
        // Add event listener for window resize
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // Clean up event listener
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    toggleFAQ = (index) => {
        this.setState((prevState) => ({
            openIndex: prevState.openIndex === index ? null : index,
        }));
    };

    render() {
        const { openIndex, width } = this.state;
        const iconSize = width <= 640 ? 14 : 28;

        const AcquisitionData = [
            {
                title: 'Basic Vehicle RC verification',
                content: "It is used to verify the RC details by matching the details obtained from the Ministry of Road, Transport, and highways.",
            },
            {
                title: 'Advance Vehicle RC Verfication',
                content: "The advanced version of the RC verification in which complete details are extracted by only providing RC number, engine number, and chassis number.",
            },
        ];

        const data = [
            { keyFeature: '✓ Error-proof documentation', perk: "✓ Plug 'N' Play approach" },
            { keyFeature: '✓ Fraud detection & reporting', perk: '✓ Fast Customer onboarding' },
            { keyFeature: '✓ Real-time verification & validation', perk: '✓ Cost effective' },
            { keyFeature: '✓ Analytics based on AI/Machine Learning', perk: '✓ Time effective' },
            { keyFeature: '✓ Geotagging & date-time stamp', perk: '✓ Real-time Scheduling' },
            { keyFeature: '✓ End to end data encryption', perk: '✓ Scalable' },
            { keyFeature: '✓ Unique payment collection method', perk: '✓ Compliance with Mandate' },
            { keyFeature: '✓ Impactful Dashboard', perk: '✓ Platform Independent' },
            { keyFeature: '✓ Efficient report creation and data collection', perk: '✓ Real-time Scheduling' },
        ];

        return (
            <section id='vehicle-verification' className="my-16 px-4 md:px-8 bg-white text-gray-900 font-myfont w-full" data-aos="fade-up-left">
                <div className="max-w-6xl mx-auto">


                <div className="relative z-10 mb-5 bg-gray-100 md:h-[60px] h-[20px] w-[70%] mt-[30px]">
                    <h1 className="font-myfontbold absolute top-1/2 left-[52%] transform w-full font-bold -translate-x-1/2 uppercase -translate-y-1/2 text-[#e27d] md:text-2xl text-[14px] tracking-wider">
                        Vehicle Verification
                    </h1>
                    <div className="absolute top-0 left-[0%] h-full w-full transform -skew-x-[40deg] bg-gray-100 -z-10"></div>
                </div>

                    {/* Wrapper for consistent width */}
                    <div className="font-myfont max-w-4xl mx-auto">

                        <div className="mb-8">


                            {AcquisitionData.map((faq, index) => (
                                <div key={index} className="mb-4 border-[1px] border-gray-500 bg-white rounded-xl">
                                    <div
                                        className="flex items-center justify-between rounded-xl p-4 bg-[#FFFFFF] cursor-pointer transition-all duration-300 ease-in-out"
                                        onClick={() => this.toggleFAQ(index)}
                                    >
                                        <div className="font-normal text-[0.6rem] md:text-lg text-[#e27daa]">{faq.title}</div>
                                        <div className="text-gray-600">
                                            {openIndex === index ? (
                                                <HiMinus size={iconSize} style={{ color: '#e27daa' }} />
                                            ) : (
                                                <GoPlus size={iconSize} style={{ color: '#e27daa' }} />
                                            )}
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div
                                            className={`text-[12px] md:text-sm px-4 pt-1 pb-2.5 bg-white rounded-xl transform transition-all duration-300 ease-in-out opacity-100 translate-y-0`}
                                        >
                                            {faq.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-hidden">
                            <table className="w-full min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                                <thead className="text-white">
                                    <tr>
                                        <th className="p-4 text-center text-sm text-black md:text-base">Key Feature</th>
                                        <th className="p-4 text-center text-sm md:text-base text-black">Perk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200">
                                            <td className="p-4 text-[10px] md:text-base">
                                                <div className="text-black p-4 rounded-lg shadow-md shadow-[#ebbfd3]">
                                                    <p>{item.keyFeature}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 text-[10px] md:text-base">
                                                <div className="bg-white text-slate-500 p-4 rounded-lg border border-gray-200 shadow-md shadow-[#ecc8d8]">
                                                    <p>{item.perk}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VehicleVerification;
