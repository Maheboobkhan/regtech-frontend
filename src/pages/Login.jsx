// import React, { Component } from 'react';
// import FooterForAllComponent from '../components/FooterForAllPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// class LoginPage extends Component {
//     componentDidMount() {
//         AOS.init({ duration: 1000, once: true });
//         window.scrollTo(0, 0);
//     }
//     render() {
//         return (
//             <>
//                 <div className="max-w-md mt-32 mb-36 mx-auto p-6 bg-white rounded-lg shadow-lg font-myfont overflow-y-hidden" data-aos="fade-up-left">
//                     <h2 className="text-2xl font-bold mb-6 text-[#e27daa] text-center">Login</h2>
//                     <form className="space-y-6">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 id="username"
//                                 className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                 placeholder=" "
//                             />
//                             <label
//                                 htmlFor="username"
//                                 className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                             >
//                                 email
//                             </label>
//                         </div>
//                         <div className="relative">
//                             <input
//                                 type="password"
//                                 id="password"
//                                 className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                 placeholder=" "
//                             />
//                             <label
//                                 htmlFor="password"
//                                 className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                             >
//                                 Password
//                             </label>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id="remember-me"
//                                     className="w-4 h-4 text-[#e27daa] rounded border border-black focus:ring-0"
//                                 />
//                                 <label
//                                     htmlFor="remember-me"
//                                     className="ml-2 text-black"
//                                 >
//                                     Remember Me
//                                 </label>
//                             </div>
//                             <a
//                                 href="/forgot-password"
//                                 className="text-[#e27daa] hover:text-[#d46a85] transition duration-300"
//                             >
//                                 Forgot Password?
//                             </a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
//                         >
//                             Login
//                         </button>
//                     </form>
//                 </div>
//                 {/* <FooterForAllComponent /> */}
//       </>
//         );
//     }
// }

// export default LoginPage;








// import React, { Component } from 'react';
// import axios from 'axios';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// class LoginPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//         };
//     }

//     componentDidMount() {
//         AOS.init({ duration: 1000, once: true });
//         window.scrollTo(0, 0);
//     }

//     handleChange = (event) => {
//         const { id, value } = event.target;
//         this.setState({ [id]: value });
//     };

//     handleSubmit = async (event) => {
//         event.preventDefault();
//         const { email, password } = this.state;
//         try {
//             const response = await axios.post('http://regtechapi.in/api/login', { email, password });
//             // Handle success (e.g., redirect or show a success message)
//             console.log('Login successful:', response.data);
//             if(response.data.toekn === '11c1aa0a8436518ee16fcbb2a78265550b'){

//             }

//         } catch (error) {
//             // Handle error (e.g., show an error message)
//             console.error('Login error:', error);
//         }
//     };

//     render() {
//         const { email, password } = this.state;

//         return (
//             <>
//                 <div className="max-w-md mt-32 mb-36 mx-auto p-6 bg-white rounded-lg shadow-lg font-myfont overflow-y-hidden" data-aos="fade-up-left">
//                     <h2 className="text-2xl font-bold mb-6 text-[#e27daa] text-center">Login</h2>
//                     <form className="space-y-6" onSubmit={this.handleSubmit}>
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 id="email"
//                                 value={email}
//                                 onChange={this.handleChange}
//                                 className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                 placeholder=" "
//                             />
//                             <label
//                                 htmlFor="email"
//                                 className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                             >
//                                 Email
//                             </label>
//                         </div>
//                         <div className="relative">
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={this.handleChange}
//                                 className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                 placeholder=" "
//                             />
//                             <label
//                                 htmlFor="password"
//                                 className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                             >
//                                 Password
//                             </label>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id="remember-me"
//                                     className="w-4 h-4 text-[#e27daa] rounded border border-black focus:ring-0"
//                                 />
//                                 <label
//                                     htmlFor="remember-me"
//                                     className="ml-2 text-black"
//                                 >
//                                     Remember Me
//                                 </label>
//                             </div>
//                             <a
//                                 href="/forgot-password"
//                                 className="text-[#e27daa] hover:text-[#d46a85] transition duration-300"
//                             >
//                                 Forgot Password?
//                             </a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
//                         >
//                             Login
//                         </button>
//                     </form>
//                 </div>
//                 {/* <FooterForAllComponent /> */}
//             </>
//         );
//     }
// }

// export default LoginPage;














import React, { Component } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        const { email, password } = this.state;
        try {
            const response = await axios.post('http://regtechapi.in/api/login', { email, password });
            // Display success toast
            
            // Redirect to dashboard
            if(response.data.token === '11c1aa0a8436518ee16fcbb2a78265550b'){
                Cookies.set('authToken', response.data.token, { expires: 7 }); // Expires in 7 days
                toast.success('Login successful!');
                setTimeout(() => {
                    this.props.navigate('/dashboard');
                }, 2000);
            }
        } catch (error) {
            // Display error toast
            toast.error('Login failed. Please try again.');
            // Handle error (e.g., show an error message)
            console.error('Login error:', error);
        }
    };

    render() {
        const { email, password } = this.state;

        return (
            <><div className='min-h-[90vh]'>
                <div className="max-w-md mt-56 mb-36 mx-auto p-6 bg-white rounded-lg shadow-lg font-myfont overflow-y-hidden" data-aos="fade-up-left">
                    <h2 className="text-2xl font-bold mb-6 text-[#e27daa] text-center">Login</h2>
                    <form className="space-y-6" onSubmit={this.handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={this.handleChange}
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
                                type="password"
                                id="password"
                                value={password}
                                onChange={this.handleChange}
                                className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                            >
                                Password
                            </label>
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
                    </form>
                </div>
                </div>
                <ToastContainer />
                {/* <FooterForAllComponent /> */}
            </>
        );
    }
}

export default function LoginPageWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginPage {...props} navigate={navigate} />;
}
