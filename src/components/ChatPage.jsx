
// 2nd
// start polling when hit the send button or submitting the form

import React, { Component } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'chat', // New state for active tab
            isModalOpen: false,
            isFormOpen: false,
            isUser: false,
            userId: null,
            isChat: false,
            clientMessage: '',
            ownerMessage: '',
            chatId: null,
            chats: [],
            animate: false,
            messages: [],
            message: '',
            services: ['API', 'Aadhar Verification', 'PAN Verification'],
            selectedService: null,
            name: '',
            mobileNumber: '',
            email: '',
        };
    }


    componentDidMount() {
        this.checkUserStatus();

        this.setState({ animate: true });

        // Remove the animation class after 10 seconds
        this.animationTimeout = setTimeout(() => {
            this.setState({ animate: false });
        }, 10000); // 10 seconds

        this.fetchMessage();
    }

    componentWillUnmount() {
        // Clean up the timeout if the component unmounts
        clearTimeout(this.animationTimeout);
    }


    fetchMessage = async () => {
        const id = localStorage.getItem('userId');
        const domain = localStorage.getItem('domain');
        try {
            const response = await axios.get(`${domain}/get-details/${id}`);
            // Ensure response.data.messages is an array
            this.setState({ messages: Array.isArray(response.data.messages) ? response.data.messages : [] });
        } catch (error) {
            console.error("Error fetching messages:", error);
            this.setState({ messages: [] });
        }
    }
    

    checkUserStatus = () => {
        const isUser = localStorage.getItem('regtech-user');
        // if (isOwner) {
        //     this.setState({ isFormOpen: false, isChat: true });
        // } else {
        //     this.setState({ isFormOpen: true, isChat: false });
        // }

        if (isUser) {
            this.setState({ isUser: true });
            this.setState({ isFormOpen: false });
        } else {
            this.setState({ isUser: false });
        }
    };

    handleServiceSelection = (service) => {
        this.setState({ selectedService: service });
        // Save service in localStorage
        localStorage.setItem('selectedService', service);
        const domain = localStorage.getItem('domain');
        // Send selected service to backend
        axios.post(`${domain}/store-service`, { service })
            .then(response => {
                localStorage.setItem('userId', response.data.id);
                this.setState({ message: 'Please submit details below to connect with us' });
            })
            .catch(error => console.error(error));
    };


    handleClientMessage = async (e) => {
        const id = localStorage.getItem('userId');
        e.preventDefault();
        const domain = localStorage.getItem('domain');
        try {
            const response = await axios.post(`${domain}/users/${id}/clientmessage`, { message: this.state.clientMessage });
            this.setState({ clientMessage: '' })

            const messageResponse = await axios.get(`${domain}/users/${id}/clientmessage`)
            this.setState({ messages: messageResponse.data.messages });
        } catch (error) {
            console.error("There was an error posting the message!", error);
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    
    handleSubmit = () => {
        const id = localStorage.getItem('userId');
    
        const { name, mobileNumber, email } = this.state;
        const domain = localStorage.getItem('domain');

        axios.post(`${domain}/store-details`, { id, name, mobileNumber, email })
            .then(response => {
                // Set a message to state
                this.setState({ message: "Thank you! Your details have been submitted. We'll get back to you soon!" });
                setTimeout(() => {
                    this.setState({ isFormOpen: !this.state.isFormOpen });
                }, 2000);

                // Store the response ID in local storage
                localStorage.setItem('regtech-user', id);
                this.setState({isUser: true});

                // Make a GET request with the current ID
                return axios.get(`${domain}/get-details/${id}`);
            })
            .then(getResponse => {
                // Store the fetched messages in the state
                this.setState({ messages: getResponse.data });
            })
            .catch(error => {
                console.error('Error during requests:', error);
                // Optionally, handle errors for both POST and GET requests
                this.setState({ message: "An error occurred. Please try again." });
            });
    };

    render() {
        const { isModalOpen, message, animate, services, selectedService, isUser, messages, isFormOpen, chats, isChat, clientMessage, ownerMessage, form } = this.state;

        return (
            <div className="relative z-[1500]">
                {/* Chat Icon */}
                <div
                    className="fixed bottom-4 right-4 p-3 bg-pink-500 text-black rounded-full cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110"
                    onClick={() => this.setState({ isModalOpen: !isModalOpen})}
                >
                    {isModalOpen ? (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-message-circle"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 12.25v4.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.75v-4.5m17-4.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"></path>
                        </svg>
                    )}
                </div>

                {/* Tabs Navigation */}
                {isModalOpen &&

                    <div className="fixed bottom-20 right-4 md:w-96 w-[90vw] max-w-sm bg-white shadow-lg rounded-lg z-50">
                        <div className="flex flex-col h-full">
                            <h1 className='text-2xl text-[#e27daa] font-bold p-2 text-center'>Chat with us</h1>
                            {/* <div className="p-4 h-68 overflow-y-auto border-b border-gray-200"> */}
                            <div className="p-4 h-72 overflow-y-auto border-b border-gray-200">
                                <div className="mb-4">
                                    <p className={`text-xl ${isModalOpen && animate ? 'animate-wave' : ''}`}>
                                        <span role="img" aria-label="waving hand">👋 Hi! How can we help you?</span>
                                    </p>
                                    {!isFormOpen && <p className='mt-4 text-center'>{message}</p>}
                                    {/* <button
                                        className="bg-blue-500 m-2 text-white px-4 py-2 rounded mr-2"
                                    >
                                        {messages.service}
                                    </button> */}
                                </div>
                                {this.state.messages && this.state.messages.length > 0 && this.state.messages.map((msg, index) => (
                                    // {/* isUser && */ }
                                    <div
                                        key={index}
                                        className={`mb-2 p-2 rounded-lg ${msg?.sender === 'owner' ? 'bg-gray-100 w-3/4 mr-auto' : 'bg-[#e27daa] w-3/4 ml-auto'} text-black`}
                                    >
                                        <div className="flex flex-col">
                                            <div className=''>
                                                {msg?.message}
                                            </div>
                                            <div className="text-xs text-gray-600 text-right">
                                                {dayjs(msg?.created_at).format('YY/MM/DD HH:mm')}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {!isFormOpen && isUser === false && <div className="flex flex-col justify-center items-center">
                                    <div className="bg-white rounded w-full max-w-md">
                                        {/* <div className="flex mb-4">
                                                {isModalOpen && isUser === false && <p className={`text-xl ${animate ? 'animate-wave' : ''}`}>
                                                    <span role="img" aria-label="waving hand">👋</span>
                                                </p>}
                                                <p>Hello! {message}</p>
                                            </div> */}
                                        {selectedService === null && (
                                            <div className="mb-4">
                                                <h1 className='text-xl font-bold'>Choose Services</h1>
                                                {services.map(service => (
                                                    <button
                                                        key={service}
                                                        className="bg-blue-500 m-2 text-white px-4 py-2 rounded mr-2"
                                                        onClick={() => this.handleServiceSelection(service)}
                                                    >
                                                        {service}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                        {selectedService && (
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="border p-2 mb-2 w-full"
                                                    onChange={this.handleInputChange}
                                                />
                                                <input
                                                    type="text"
                                                    name="mobileNumber"
                                                    placeholder="Mobile Number"
                                                    className="border p-2 mb-2 w-full"
                                                    onChange={this.handleInputChange}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="border p-2 mb-2 w-full"
                                                    onChange={this.handleInputChange}
                                                />
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                                    onClick={this.handleSubmit}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>}

                            </div>
                            {/* Input Field and Send Button */}
                            <div className="p-4 flex items-center border-t border-gray-200">
                                <input
                                    type="text"
                                    value={clientMessage}
                                    onChange={(e) => this.setState({ clientMessage: e.target.value })}
                                    placeholder="Type a message..."
                                    className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
                                />
                                <button
                                disabled={isUser === false}
                                    onClick={this.handleClientMessage}
                                    value={clientMessage}
                                    onChange={(e) => this.setState({ clientMessage: e.target.value })}
                                    className={`${isUser === false ? 'bg-gray-500' : 'bg-pink-500 hover:bg-pink-600'} p-2 text-white rounded-lg`}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ChatComponent;