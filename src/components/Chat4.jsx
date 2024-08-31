// src/ChatComponent.js
import React, { Component } from 'react';
import axios from 'axios';

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'How can I help you?',
            services: ['API', 'Aadhar Verification', 'PAN Verification'],
            selectedService: null,
            name: '',
            mobileNumber: '',
            email: '',
        };
    }

    handleServiceSelection = (service) => {
        this.setState({ selectedService: service });
        // Save service in localStorage
        localStorage.setItem('selectedService', service);
        // Send selected service to backend
        axios.post('http://localhost:8000/api/store-service', { service })
            .then(response => {
                console.log('res: ',response.data.id);
                localStorage.setItem('userId', response.data.id);
                this.setState({ message: 'Please enter your name, mobile number, and email.' });
            })
            .catch(error => console.error(error));
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        const id = localStorage.getItem('userId');
        console.log('user: ',id)
        const { name, mobileNumber, email } = this.state;
        axios.post('http://localhost:8000/api/store-details', { id, name, mobileNumber, email })
            .then(response => {
                this.setState({ message: 'Thank you! Your details have been submitted.' });
            })
            .catch(error => console.error(error));
    };

    render() {
        const { message, services, selectedService } = this.state;
        return (
            <div className="p-4 bg-gray-100 h-screen flex flex-col justify-center items-center">
                <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
                    <div className="mb-4">
                        <p>{message}</p>
                    </div>
                    {selectedService === null && (
                        <div className="mb-4">
                            <h1>Choose Services</h1>
                            {services.map(service => (
                                <button
                                    key={service}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
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
            </div>
        );
    }
}

export default ChatComponent;
