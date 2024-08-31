import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css'

// import './App.css'; // Make sure to include Tailwind CSS in your project

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [0, 0, 0], // Initial values for the counters
    };
  }

  componentDidMount() {
    const ul = this.ulRef;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
    this.incrementCounters();

   
      AOS.init({ duration: 1000, once: true });
      window.scrollTo(0, 0);
  }

  incrementCounters = () => {
    const targetValues = [24, 580, 10000];
    const duration = 2000; // Duration of the animation in milliseconds
    const stepTime = 50; // Time between each step

    targetValues.forEach((target, index) => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        this.setState(prevState => {
          const newValues = [...prevState.values];
          newValues[index] = current;
          return { values: newValues };
        });
      }, stepTime);
    });
  };

  render() {
    return (
      <div className='font-myfont' data-aos="fade-up-left">
        {/* Banner Section */}
        {/* <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/04/02/18/21/ai-generated-7895198_1280.jpg")' }}> */}
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("company/Designer.jpeg")', backgroundPosition: 'right left bottom' }}>
          <h1 className="text-4xl font-bold mb-4 text-[#e27d] text_shadow">Our Mission</h1>
          <p className="text-xl mb-8 text-center max-w-2xl text-black text_shadow">
            Organizing, optimizing, and setting the standards for Fintech logistics & Debt collection using technology in the forefront and human network in the core.
          </p>
          <div className="md:flex md:flex-row flex-col md:space-x-14 mt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#e27d] text_shadow">{this.state.values[0]}+</p>
              <p className="text-lg text-black text_shadow">States and Union Territories</p>
            </div>
            <div className="text-center md:mt-0 mt-5">
              <p className="text-3xl font-bold text-[#e27d] text_shadow">{this.state.values[1]}+</p>
              <p className="text-lg text-black text_shadow">Locations</p>
            </div>
            <div className="text-center md:mt-0 mt-5">
              <p className="text-3xl font-bold text-[#e27d] text_shadow">{this.state.values[2]}+</p>
              <p className="text-lg text-black text_shadow">Fintech Correspondents</p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="p-8">
          <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
            <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">About Us</h1>
              <p>We are India's first Phygital Fintech logistics company helping Banks, NBFCs, Fintech and Insurance companies in faster document collection, Customer Verification and Debt Collection. Our platform offer complete logistics solution for collection of documents and Debt, online and offline. It is supported by digitally enable pan-India network of Fintech Correspondants and Debt Collection agencies.</p>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2014/09/10/17/29/handshake-440959_1280.jpg"
              alt="Image 1"
              className="md:w-1/4 w-full h-auto ml-4 object-cover"
            />
          </div>
        </div>

        <header
          className="pb-20 flex flex-col items-center px-5 text-lg font-medium text-center bg-white text-black text-opacity-90"
          aria-label="Landing Component"
          role="banner"
        >
          <div className="font-bold max-md:max-w-full text-xl md:text-3xl text-[#e27daa] border-b-2 border-[#e27daa]">
            Trusted by 14+ gobal brands
          </div>
          <div
            className="w-full inline-flex flex-nowrap"
          >
            <ul
              ref={(el) => this.ulRef = el}
              className="mt-2 flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
            >
              <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                <img src="/company/1.jpeg" alt="google" className="md:w-[160px] w-[100px]" />
              </li>
              <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                <img src="/company/2.jpeg" alt="ibm" className="md:w-[160px] w-[100px]" />
              </li>
              <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                <img src="/company/3.jpeg" alt="apple" className="md:w-[160px] w-[100px]" />
              </li>
              <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                <img src="company/4.jpeg" alt="amazon" className="md:w-[160px] w-[100px]" />
              </li>
            </ul>

          </div>
        </header>
      </div>
    );
  }
}

export default Company;











// import React, { Component } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Optimize images: Use smaller, optimized images or placeholders
// import imgBanner from 'https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg'; // Example optimized image import
// import imgCompany1 from '/company1.jpeg'; // Example optimized image import
// import imgCompany2 from '/company2.jpeg'; // Example optimized image import
// import imgCompany3 from '/company3.jpeg'; // Example optimized image import
// import imgCompany4 from '/company4.jpeg'; // Example optimized image import

// class Company extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       values: [0, 0, 0], // Initial values for the counters
//     };
//   }

//   componentDidMount() {
//     AOS.init({ duration: 1000, once: true });
//     this.incrementCounters();
//   }

//   incrementCounters = () => {
//     const targetValues = [24, 580, 10000];
//     const duration = 2000;
//     const steps = Math.floor(duration / 16); // Roughly 60fps
//     const stepTimes = duration / steps;

//     targetValues.forEach((target, index) => {
//       let current = 0;
//       const step = target / steps;

//       const animate = () => {
//         current += step;
//         if (current >= target) {
//           current = target;
//         } else {
//           requestAnimationFrame(animate);
//         }
//         this.setState(prevState => {
//           const newValues = [...prevState.values];
//           newValues[index] = Math.floor(current);
//           return { values: newValues };
//         });
//       };

//       animate();
//     });
//   };

//   render() {
//     return (
//       <div className='font-myfont' data-aos="fade-up-left">
//         {/* Banner Section */}
//         <div 
//           className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white"
//           style={{ backgroundImage: `url(${imgBanner})` }}
//         >
//           <h1 className="text-4xl font-bold mb-4 text-[#e27d]">Our Mission</h1>
//           <p className="text-xl mb-8 text-center max-w-2xl text-[#e27daa]">
//             Organizing, optimizing, and setting the standards for Fintech logistics & Debt collection using technology in the forefront and human network in the core.
//           </p>
//           <div className="flex space-x-4">
//             <div className="text-center">
//               <p className="text-3xl font-bold text-[#e27daa]">{this.state.values[0]}+</p>
//               <p className="text-lg text-gray-500">States and Union Territories</p>
//             </div>
//             <div className="text-center">
//               <p className="text-3xl font-bold text-[#e27daa]">{this.state.values[1]}+</p>
//               <p className="text-lg">Locations</p>
//             </div>
//             <div className="text-center">
//               <p className="text-3xl font-bold text-[#e27daa]">{this.state.values[2]}+</p>
//               <p className="text-lg">Fintech Correspondents</p>
//             </div>
//           </div>
//         </div>

//         {/* About Us Section */}
//         <div className="p-8">
//           <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
//             <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
//               <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">About Us</h1>
//               <p>We are India's first Phygital Fintech logistics company helping Banks, NBFCs, Fintech and Insurance companies in faster document collection, Customer Verification and Debt Collection. Our platform offers a complete logistics solution for collection of documents and Debt, online and offline. It is supported by a digitally enabled pan-India network of Fintech Correspondents and Debt Collection agencies.</p>
//             </div>
//             <img
//               src={imgCompany1} // Use optimized image import
//               alt="Company Overview"
//               className="md:w-1/4 w-full h-auto ml-4 object-cover"
//               loading="lazy" // Add lazy loading
//             />
//           </div>
//         </div>

//         {/* Trusted Brands Section */}
//         <header
//           className="pb-20 flex flex-col items-center px-5 text-lg font-medium text-center bg-white text-black text-opacity-90"
//           aria-label="Landing Component"
//           role="banner"
//         >
//           <div className="font-bold max-md:max-w-full text-xl md:text-3xl text-[#e27daa] border-b-2 border-[#e27daa]">
//             Trusted by 14+ global brands
//           </div>
//           <div className="w-full inline-flex flex-nowrap">
//             <ul
//               className="mt-2 flex items-center justify-center md:justify-start animate-infinite-scroll"
//             >
//               <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
//                 <img src={imgCompany1} alt="Google" className="md:w-[160px] w-[100px]" />
//               </li>
//               <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
//                 <img src={imgCompany2} alt="IBM" className="md:w-[160px] w-[100px]" />
//               </li>
//               <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
//                 <img src={imgCompany3} alt="Apple" className="md:w-[160px] w-[100px]" />
//               </li>
//               <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
//                 <img src={imgCompany4} alt="Amazon" className="md:w-[160px] w-[100px]" />
//               </li>
//             </ul>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default Company;
