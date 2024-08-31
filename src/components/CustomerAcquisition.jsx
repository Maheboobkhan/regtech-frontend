import React, { Component } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import useWindowSize from './UseWindowSize';
import AOS from 'aos';
import 'aos/dist/aos.css';

class CustomerAcquisition extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
}
  constructor(props) {
    super(props);
    this.state = {
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
        title: 'CIN LLPIN Validation?',
        content: "It is used to extract the details such as company name, address, director's details, and the annual return date. All the details are verified using the data obtained from the Ministry of Corporate Affairs.",
      },
      {
        title: 'DIN Verfication?',
        content: "The director or director's details can be verified using this API based on data obtained from the Ministry of Corporate Affairs.",
      },
      {
        title: 'ITR Verfication',
        content: 'A great option to verify the ITR details where PAN number works as the input, and in the form of output, it produces details associated with PAN. The details verified using the data obtained from the GST Portal.',
      },
      {
        title: 'GSTIN Verification',
        content: 'It is used to verify GST details by capturing the GST certificate image or GSTIN number, which produces the company name, address, filling status, and company type.',
      },
      {
        title: 'Shops and Establishment',
        content: 'Here, inputs required are shop establishment id or S&E certificate image. All the details are verified by obtaining the data extracted from the portals of various states.',
      },
    ];

    return (
      <div id='verified-customer-acquisition' className="font-myfont md:mt-[0px] mt-[-40px] left-1/2 -translate-x-1/2 max-w-4xl mx-auto pt-14 w-3/4 md:w-full" data-aos="fade-up" >
        {/* <h1 className='border-b-[1px] border-gray-400 mb-5 md:mb-10 mt-2 font-myfont text-[0.9rem] md:text-[2.4rem] text-center tracking-wider'>
          Verified Customer <span className='font-normal text-opacity-100'>Acquisition</span>
        </h1> */}


        <div className="relative z-10 mb-5 ml-[-10%] md:ml-[-15%] bg-gray-100 md:h-[60px] h-[30px] w-[100%] mt-[30px]">
          <h1 className="font-myfontbold absolute top-1/2 left-[52%] transform w-full font-bold -translate-x-1/2 uppercase -translate-y-1/2 text-[#e27d] md:text-2xl md:px-0 px-1 text-[11px] tracking-wider">
            Verified Customer Acquisition
          </h1>
          <div className="absolute top-0 left-[0%] h-full w-full transform -skew-x-[40deg] bg-gray-100 -z-10"></div>
        </div>

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
    );
  }
}

export default CustomerAcquisition;
