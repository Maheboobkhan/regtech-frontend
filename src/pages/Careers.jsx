import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './App.css'; // Make sure to include Tailwind CSS in your project

class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [0, 0, 0], // Initial values for the counters
        };
    }

    //   componentDidMount() {
    //     const ul = this.ulRef;
    //     if (ul) {
    //         ul.insertAdjacentHTML('afterend', ul.outerHTML);
    //         ul.nextSibling.setAttribute('aria-hidden', 'true');
    //     }
    // }

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
            <div className='font-myfont' data-aos='fade-up-left'>
                {/* Banner Section */}
                {/* <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/12/14/20/21/book-6871220_1280.jpg")' }}> */}
                <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("careers/Designer.jpeg")' }}>
                    <h1 className="md:text-8xl text-6xl font-light mb-4 text-[#e27daa] careers_shadow">Careers</h1>
                </div>

                {/* About Us Section */}
                <div className="p-8">
                    <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                        <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]"><span className='text-black'>Be a Part of</span> RegTech family</h1>
                            <p><span className='text-[#e27daa] text-lg'>RegTech</span> started its journey in 2018 to create a new wave in Fintech logistics sector. A highly fragmented sector scatterd across India, were dominated by smaller local agencies. Our vision to organise this sector and equip them with technology has started the process of democratising the collection services of Banks & NBFCs Our Phygital platform is using technology in the forefront and human network in the core. We are proud that our modern way of handling document collection, customer verification and Debt recovery has started disrupting traditional way of decision making process in Fintech logistics. This serves our mission to defragment this segment.</p>
                            <p className='mt-3'>We Welcome members with appetite to take challenges and explore the untapped territory. The journey of start-up gives ample insigt of an entrepreneurial exposure to the team member.</p>
                        </div>
                        <img
                            src="careers/5.jpg"
                            alt="Image 1"
                            className="md:w-1/3 w-full h-auto ml-4 md:object-cover"
                        />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row mb-20 mt-10 gap-8 max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg font-myfont">
                    {/* Job Openings Section */}
                    <div className="flex-1 mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-[#e27daa]">Latest Job Openings</h2>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-black">1. Fintech Correspondents</h3>
                            <p className="text-lg text-black mt-2">We are looking for Fintech Correspondent in Hyderabad, Telangana</p>
                            <p className="text-md text-black mt-2">Job Description: Document and collection and verification for Banks and NBFC</p>
                        </div>
                    </div>

                    {/* Careers Form Section */}
                    <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
                        <h2 className="text-2xl font-bold text-[#e27daa] mb-2">Apply Here</h2>
                        <form className="space-y-4">
                            {/* Full Name Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="full-name"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="full-name"
                                    className="absolute top-2 left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Full Name<span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute top-2 left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Email<span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Phone Field */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute top-2 left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Phone<span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* D.O.B Field */}
                            <div className="relative">
                                <input
                                    type="date"
                                    id="dob"
                                    className="mt-5 peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="dob"
                                    className="absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    D.O.B<span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Qualifications Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="qualifications"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="qualifications"
                                    className="absolute top-2 left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Qualifications<span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Attach Resume Field */}
                            <div className="relative">
                                <input
                                    type="file"
                                    id="resume"
                                    className="mt-5 w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                />
                                <label
                                    htmlFor="resume"
                                    className="absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Attach Resume Here
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
                            >
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>


            </div>
        );
    }
}

export default Careers;
