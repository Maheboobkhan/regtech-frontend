import React, { Component } from 'react';
import FooterForAllComponent from '../components/FooterForAllPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Demo extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
}
  render() {
    return (
      <>
      <div className="max-w-lg mt-20 mb-16 mx-auto p-4 bg-white rounded-lg shadow-lg font-myfont" data-aos="fade-up-left">
        <h2 className="text-2xl font-bold mb-6 text-[#e27daa] w-fit mx-auto">Schedule Demo</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="first-name"
              className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="first-name"
              className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="last-name"
              className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="last-name"
              className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
            >
              Last Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="mobile-number"
              className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="mobile-number"
              className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
            >
              Mobile Number
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="textarea"
              id="message"
              className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-2 peer-focus:text-[#e27daa]"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
          >
            Schedule Demo
          </button>
        </form>
      </div>

{/* <FooterForAllComponent /> */}
</>
    );
  }
}

export default Demo;
