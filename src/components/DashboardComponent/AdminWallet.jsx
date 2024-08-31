import React, { Component } from 'react';
import { RxCross2 } from "react-icons/rx";

class AdminWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            balance: 2708.38,
            selectedUser: '', // New state for user selection
            paymentMethod: 'credit', // New state for payment method
            users: ['User1', 'User2', 'User3', 'User4', 'User5'], // List of users
            paymentMethods: ['Credit', 'Debit'], // Payment methods
        };
    }


    handleUserChange = (e) => {
        this.setState({ selectedUser: e.target.value });
    };

    handlePaymentMethodChange = (e) => {
        this.setState({ paymentMethod: e.target.value });
    };

    render() {
        const { amount, balance, selectedUser, paymentMethod, users, paymentMethods } = this.state;

        return (
            <div className="p-4 mt-20 border-[1.5px] md:mx-auto rounded-md border-[#00acc1] text-black shadow-lg md:w-[60vw] w-[100vw]">
                {/* <div className='flex items-center'>
                    <RxCross2 className='text-2xl font-bold text-white mr-4' />
                    <h2 className="text-2xl font-semibold mb-4 text-[#e27daa]">Current Wallet Balance: {balance.toFixed(2)} ₹</h2>
                </div> */}

                <h1 className='text-3xl text-[#00acc1] w-fit mx-auto mb-4'>Admin Add Wallet Balance</h1>

                <div className='flex space-x-4'>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="user" className="block text-md">Select User</label>
                        <select
                            id="user"
                            value={selectedUser}
                            onChange={this.handleUserChange}
                            className="text-black w-full p-2 border border-[#00acc1] rounded-md"
                        >
                            <option value="">Select User</option>
                            {users.map(user => (
                                <option key={user} value={user}>{user}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 w-1/2">
                        <label htmlFor="payment-method" className="block text-md">Payment Method</label>
                        <select
                            id="payment-method"
                            value={paymentMethod}
                            onChange={this.handlePaymentMethodChange}
                            className="text-black w-full p-2 border border-[#00acc1] rounded-md"
                        >
                            {paymentMethods.map(method => (
                                <option key={method} value={method}>{method}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <label htmlFor="amount" className="block text-md">Add Amount in Wallet</label>
                <input
                    type="number"
                    id="amount"
                    onChange={this.handleInputChange}
                    placeholder="Enter Wallet Amount"
                    className="text-black w-full p-2 mb-4 border border-[#00acc1] rounded-md"
                />

                <div className='w-full text-center'>
                <button className="w-fit px-12 mx-auto bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none">
                    Pay
                </button>
                </div>
            </div>
        );
    }
}

export default AdminWallet;
