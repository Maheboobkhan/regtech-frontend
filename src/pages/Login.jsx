
import React, { Component } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false, // State for toggling password visibility
            errorMessage: null,
        };
    }

    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const domain = localStorage.getItem('domain');
        
        const { email, password } = this.state;
        try {
            const response = await axios.post(`${domain}/login`, { email, password });
           
            // Display success toast
            
            // Redirect to dashboard
            if(response.data.message && response.data.statusCode !== 200){
                this.setState({ errorMessage: response.data.message });
            }
            if(response.data.token){
                Cookies.set('authToken', response.data.token, { expires: 7 }); // Expires in 7 days
                toast.success('Login successful!');
                setTimeout(() => {
                    this.props.navigate('/dashboard');
                }, 2000);
            }
        } catch (error) {
            toast.error('Login failed. Please try again.');
            console.error('Login error:', error);
        }
    };

    togglePasswordVisibility = () => {
        this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    };

    render() {
        const { email, password, showPassword, errorMessage } = this.state;

        return (
            <>
                <div className='min-h-[90vh]'>
                    <div className="max-w-md mt-56 mb-36 mx-auto p-6 bg-white rounded-lg shadow-custom font-myfont overflow-y-hidden" data-aos="fade-up-left">
                        <h2 className="text-2xl font-bold mb-6 text-[#e27daa] text-center">Login</h2>
                        <form className="space-y-6" onSubmit={this.handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    className={`peer w-full px-3 pt-5 pb-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0 ${
                                        email && 'pt-6' // Adjust padding if there's a value
                                    }`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-3 top-2 text-black transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa] ${
                                        email && 'text-[#e27daa] text-xs top-1' // Adjust label when there's a value
                                    }`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    className={`peer w-full px-3 pt-5 pb-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0 ${
                                        password && 'pt-6' // Adjust padding if there's a value
                                    }`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className={`absolute left-3 top-2 text-black transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa] ${
                                        password && 'text-[#e27daa] text-xs top-1' // Adjust label when there's a value
                                    }`}
                                >
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={this.togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        className="w-4 h-4 text-[#e27daa] rounded border border-black focus:ring-0"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 text-black"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <a
                                    href="/forgot-password"
                                    className="text-[#e27daa] hover:text-[#d46a85] transition duration-300"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
                            >
                                Login
                            </button>
                            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </>
        );
    }
}

export default function LoginPageWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginPage {...props} navigate={navigate} />;
}
