
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoMail } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import axios from 'axios'; // Install axios with `npm install axios` or `yarn add axios`

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            enquireFor: '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            message: '',
            submitting: false,
            successMessage: '',
            errorMessage: '',
        };
    }

    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.addEventListener('resize', this.handleResize);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSelectChange = (event) => {
        this.setState({ enquireFor: event.target.value });
    };


    // handlesubmit with email
    handleSubmit = async (event) => {
        event.preventDefault();
        const { fname, lname, email, phone, enquireFor, message } = this.state;

        if (!fname || !lname || !email || !phone || !enquireFor || !message) {
            this.setState({ errorMessage: 'Please fill out all fields' });
            return;
        }

        this.setState({ submitting: true });
        const domain = localStorage.getItem('domain');

        try {
            // Step 1: Store the data in your database
            const storeResponse = await axios.post(`${domain}/contact`, {
                fname,
                lname,
                email,
                phone,
                enquireFor,
                message,
            });

            

            // Step 2: Send email using the provided API
            const emailResponse = await axios.post('https://collectkart.docboyz.in/api/enquiery_email', {
                name: `${fname} ${lname}`,
                email,
                phone,
                enquiry: enquireFor,
                message,
            });

            

            // Update state with success message if both requests are successful
            this.setState({
                successMessage: 'Your message has been sent successfully! we will contact you shortly.',
                errorMessage: '',
                submitting: false,
                fname: '',
                lname: '',
                email: '',
                phone: '',
                enquireFor: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);

            // Update state with error message if either request fails
            this.setState({
                errorMessage: 'There was an error sending your message. Please try again.',
                submitting: false
            });
        }
    };



    render() {
        const { width, enquireFor, fname, lname, email, phone, message, submitting, successMessage, errorMessage } = this.state;
        const isMobile = width <= 640;

        return (
            <>
            <div className='min-h-[100vh]'>
                <div className="max-w-md md:mt-24 mt-20 mx-auto p-4 bg-white rounded-lg shadow-custom font-myfont" data-aos="fade-up-left">
                    <h1 className='text-3xl mb-4 w-fit mx-auto'>Contact Us</h1>
                    <form className={`space-y-6 ${isMobile ? 'md:space-y-4 space-y-3 px-4 py-6' : ''}`} onSubmit={this.handleSubmit}>

                        <div className='flex gap-x-2'>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fname"
                                    value={fname}
                                    onChange={this.handleChange}
                                    className={`peer w-full px-3 ${isMobile ? 'py-2' : 'pt-1 pb-5'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="fname"
                                    className={`absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[#e27daa] peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa] ${fname ? 'top-[-18px] text-[#e27daa]' : 'text-[#e27daa]'}`}
                                >
                                    First Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="lname"
                                    value={lname}
                                    onChange={this.handleChange}
                                    className={`peer w-full px-3 ${isMobile ? 'py-2' : 'pt-1 pb-5'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="lname"
                                    className={`absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[#e27daa] peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa] ${lname ? 'top-[-18px] text-[#e27daa]' : 'text-[#e27daa]'}`}
                                >
                                    Last Name
                                </label>
                            </div>
                        </div>

                        <div className="relative mt-2">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={this.handleChange}
                                className={`peer w-full px-3 ${isMobile ? 'py-2' : 'pt-1 pb-5'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className={`absolute top-1 left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[#e27daa] peer-focus:-top-4 peer-focus:left-2 peer-focus:text-[#e27daa] ${email ? 'top-[-18px] text-[#e27daa]' : 'text-[#e27daa]'}`}
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative mt-2">
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={this.handleChange}
                                className={`peer w-full px-3 ${isMobile ? 'py-2' : 'pt-1 pb-5'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="phone"
                                className={`absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[#e27daa] peer-focus:-top-4 peer-focus:left-2 peer-focus:text-[#e27daa] ${phone ? 'top-[-18px] text-[#e27daa]' : 'text-[#e27daa]'}`}
                            >
                                Phone
                            </label>
                        </div>

                        <div className="relative mt-2">
                            <select
                                id="enquire-for"
                                value={enquireFor}
                                onChange={this.handleSelectChange}
                                className={`w-full text-[#e27daa] px-3 cursor-pointer ${isMobile ? 'py-2' : 'py-3'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0 bg-white`}
                            >
                                <option value="" disabled>Enquire For</option>
                                <option value="document-collection">Document Collection</option>
                                <option value="debt-recovery">Debt Recovery</option>
                                <option value="regtech-api">Regtech API</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="relative mt-2">
                            <textarea
                                id="message"
                                rows="1"
                                value={message}
                                onChange={this.handleChange}
                                className={`peer w-full px-3 ${isMobile ? 'py-2' : 'pt-1 pb-5'} border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="message"
                                className={`absolute left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[#e27daa] peer-focus:-top-4 peer-focus:left-2 peer-focus:text-[#e27daa] ${message ? 'top-[-18px] text-[#e27daa]' : 'text-[#e27daa]'}`}
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-2 ${isMobile ? 'bg-[#e27daa]' : 'py-2'} bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300`}
                            disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Contact Us'}
                        </button>

                        {successMessage && <div className="text-green-600">{successMessage}</div>}
                        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
                    </form>

                    <div className="md:mt-8 space-y-1 flex flex-col items-center">
                        <h2 className="md:text-xl text-lg font-bold text-[#e27daa]">Contact Details</h2>

                        <div className="flex items-center">
                            <MdOutlineCall className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
                            <a href="tel:+1234567890" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">+91 7766969646</a>
                        </div>

                        <div className="flex items-center">
                            <GoMail className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
                            <a href="mailto:info@example.com" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">info@docboyz.in</a>
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default ContactUs;
