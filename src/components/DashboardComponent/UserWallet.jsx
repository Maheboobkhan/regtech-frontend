import React, { Component } from 'react';
import { RxCross2 } from "react-icons/rx";

class UserWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            balance: 2708.38,
            selectedUser: '', // New state for user selection
            paymentMethod: 'credit', // New state for payment method
            users: ['User1', 'User2', 'User3', 'User4', 'User5'], // List of users
            paymentMethods: ['credit', 'debit'], // Payment methods
        };
    }

    handleInputChange = (e) => {
        this.setState({ amount: e.target.value });
    };

    handleOptionClick = (value) => {
        this.setState({ amount: value });
    };

    handleUserChange = (e) => {
        this.setState({ selectedUser: e.target.value });
    };

    handlePaymentMethodChange = (e) => {
        this.setState({ paymentMethod: e.target.value });
    };

    render() {
        const { amount, balance, selectedUser, paymentMethod, users, paymentMethods } = this.state;
        const tax = (amount * 0.18).toFixed(2);
        const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);

        return (
            <div className="mx-auto p-6 rounded-md text-black border-[1.5px] border-[#00acc1] w-[60vw]">
                {/* <div className='flex items-center'>
                    <RxCross2 className='text-2xl font-bold text-white mr-4' />
                    <h2 className="text-2xl font-semibold mb-4 text-[#e27daa]">Current Wallet Balance: {balance.toFixed(2)} ₹</h2>
                </div> */}

<div className="mb-4">
                    <label htmlFor="user" className="block text-lg mb-2">Select User</label>
                    <select
                        id="user"
                        value={selectedUser}
                        onChange={this.handleUserChange}
                        className="text-black w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select User</option>
                        {users.map(user => (
                            <option key={user} value={user}>{user}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="payment-method" className="block text-lg mb-2">Payment Method</label>
                    <select
                        id="payment-method"
                        value={paymentMethod}
                        onChange={this.handlePaymentMethodChange}
                        className="text-black w-full p-2 border border-gray-300 rounded-md"
                    >
                        {paymentMethods.map(method => (
                            <option key={method} value={method}>{method}</option>
                        ))}
                    </select>
                </div>

                <label htmlFor="amount" className="block text-lg mb-2">Add Amount in Wallet</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={this.handleInputChange}
                    placeholder="Enter Wallet Amount"
                    className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
                />

                <div className="flex justify-center space-x-2 mb-4">
                    <button
                        onClick={() => this.handleOptionClick('20000')}
                        className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none"
                    >+20,000</button>
                    <button
                        onClick={() => this.handleOptionClick('50000')}
                        className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none"
                    >+50,000</button>
                    <button
                        onClick={() => this.handleOptionClick('100000')}
                        className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none"
                    >+1,00,000</button>
                </div>

                <div className="flex justify-between text-lg mb-4">
                    <div className="flex-1">
                        <p>Tax (18%):</p>
                        <p>Total Amount:</p>
                    </div>
                    <div className="flex-1 text-right">
                        <p>{tax} ₹</p>
                        <p>{amount} ₹</p>
                    </div>
                </div>

                <button className="w-full bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none">
                    Proceed to Pay
                </button>
            </div>
        );
    }
}

export default UserWallet;
