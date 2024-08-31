

import React from 'react';
import data from '../components/jsonData/CustomerVerification.json';
import FooterForAllComponent from '../components/FooterForAllPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

class CustomerVerification extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div className='mt-24' data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] transform w-full -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont tracking-wider">
                        Customer Verification
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex mt-8 p-4 items-center justify-center">
                    <img
                        src="customer_verification/customer_verification.png"
                        alt="Image 1"
                        className="md:w-1/4 w-full h-auto object-cover"
                    />
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <p>Financial services are always at highest to risk of fraud. RegTech reliable and digitally evolved customer verification services are best tool to prevent fraud. Our Fintech Correspondants are well equipped with skill and technology to detect fraud on the ground.</p>
                        <p className='mt-6'>✓ Original Seen and Verified (OSV)</p>
                        <p>✓ Contact Point Verification</p>
                        <p>✓ Permanent address visit for skip tracing</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    {data.map((dataItem, index) => {
                        return (
                            <div key={index} className="flex flex-col sm:flex-row items-center mt-8 p-4 justify-center">
                                <img
                                    src={dataItem.image}
                                    alt="Image 2"
                                    className="w-40 h-24  object-auto"
                                />
                                <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                    <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">{dataItem.title}</h2>
                                    <p className="text-base sm:text-lg">{dataItem.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <FooterForAllComponent /> */}
            </div>
        );
    }
}

export default CustomerVerification;












// import React from 'react';
// import data from '../components/jsonData/CustomerVerification.json';

// class CustomerVerification extends React.Component {
//     render() {
//         return (
//             <div className="">
//                 {/* Header Section */}
//                 <div className="relative z-[-2] bg-[#e27daa] h-[80px] w-[60%] mt-[20px]">
//                     <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
//                         Customer Verification
//                     </h1>
//                     <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
//                 </div>

//                 {/* Main Content Section */}
//                 <div className="flex flex-col sm:flex-row mt-8 p-4 items-center justify-center">
//                     <img
//                         src="customer_verification/customer_verification.png"
//                         alt="Customer Verification"
//                         className="w-full sm:w-1/4 h-auto object-cover mb-4 sm:mb-0"
//                     />
//                     <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8">
//                         <p className="text-base sm:text-lg">Financial services are always at highest to risk of fraud. RegTech reliable and digitally evolved customer verification services are best tool to prevent fraud. Our Fintech Correspondants are well equipped with skill and technology to detect fraud on the ground.</p>
//                         <p className='mt-6 text-base sm:text-lg'>✓ Original Seen and Verified (OSV)</p>
//                         <p className='text-base sm:text-lg'>✓ Contact Point Verification</p>
//                         <p className='text-base sm:text-lg'>✓ Permanent address visit for skip tracing</p>
//                     </div>
//                 </div>

//                 {/* Data Items Section */}
//                 <div className='flex flex-col'>
//                     {data.map((dataItem, index) => (
//                         <div key={index} className="flex flex-col sm:flex-row mt-8 p-4 justify-center">
//                             <img
//                                 src={dataItem.image}
//                                 alt={dataItem.title}
//                                 className="sm:w-16 h-auto object-cover mb-4 sm:mb-0"
//                             />
//                             <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8">
//                                 <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">{dataItem.title}</h2>
//                                 <p className="text-base sm:text-lg">{dataItem.content}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default CustomerVerification;
