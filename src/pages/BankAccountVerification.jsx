import React from "react";import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterForAllComponent from "../components/FooterForAllPage";

class BankAccountVerification extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
            window.scrollTo(0, 0);
          
      }
    render() {
        return (
            <div className="min-h-[100vh]">
            <div className="mt-24" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont">
                        Bank Account Verification
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                        <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                            <p className="text-base sm:text-lg">customer's bank details can be verified with accuracy by using the details such as account number, IFSC code, or cheque image. All the details will be matched with the details obtained from the bank's IMPS network.</p>
                        </div>
                        <img
                            src="bank.png"
                            alt="Image 1"
                            className="md:w-1/4 w-full h-auto object-cover"
                        />
                    </div>
                    {/* <FooterForAllComponent /> */}
            </div>
            </div>
        );
    }
}

export default BankAccountVerification;