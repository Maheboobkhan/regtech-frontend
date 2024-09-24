import React, { Component } from 'react';
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class AdminUserWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openWalletModal: false,
      isAdmin: false,
      selectedUser: '',
      paymentMethod: '',
      amount: '',
      usersAscending: [
        // { id: 1, name: 'Alice', email: 'alice@example.com', wallet_amount: 5000 },
        // { id: 2, name: 'Bob', email: 'bob@example.com', wallet_amount: 7000 },
        // { id: 3, name: 'Charlie', email: 'charlie@example.com', wallet_amount: 3000 },
      ],
      paymentMethods: ["Select Payment Method", "credit", "debit"],
      tax: 0,
      totalAmount: 0,
    };
  }

  componentDidMount(){
    this.getUsersAscending();
  }

  getUsersAscending = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getallusersascending`
      );
      const usersAscending = response.data;
      console.log(usersAscending);
      console.log("uu: ", usersAscending);
      this.setState({ usersAscending: usersAscending });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  toggleWalletModal = () => {
    this.setState(prevState => ({ openWalletModal: !prevState.openWalletModal }));
  };

  closeWalletModel = () => {
    this.setState({ openWalletModal: false });
  };

  toggleView = () => {
    this.setState(prevState => ({ isAdmin: !prevState.isAdmin }));
  };

  handleUserChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  handlePaymentMethodChange = (e) => {
    this.setState({ paymentMethod: e.target.value });
  };

  handleInputChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleOptionClick = (amount) => {
    this.setState({ amount });
  };

  handleAdminForm = () => {
    toast.success('Admin wallet balance updated!');
    this.setState({ openWalletModal: false });
  };

  handleUserForm = () => {
    toast.success('User wallet balance updated!');
  };

  render() {
    const { openWalletModal, isAdmin, selectedUser, paymentMethod, amount, usersAscending, paymentMethods } = this.state;
    const tax = (amount * 0.18).toFixed(2);
    const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);

    return (
    //   <div className={`fixed top-16 right-0 bg-white ${openWalletModal ? 'w-1/3' : 'w-0'}`}>
    <div className='mt-8'>
        {/* <RxCross2 className="text-4xl cursor-pointer hover:text-[#e27daa]" onClick={this.closeWalletModel} /> */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={this.toggleView}
            className="px-4 py-2 bg-[#00acc1] mx-auto text-black rounded-md hover:bg-[#1dc6dc] focus:outline-none"
          >
            {isAdmin ? "Switch to User View" : "Switch to Admin View"}
          </button>
        </div>

        {isAdmin ? (
          <div className="p-4 mt-4 mx-8 mb-4 border-[1.5px] rounded-md border-[#00acc1] text-black shadow-lg">
            <h1 className="text-3xl text-[#00acc1] w-fit mx-auto mb-4">Admin Add Wallet Balance</h1>
            <div className="mb-4">
              <label htmlFor="user" className="block text-md">Select User</label>
              <select id="user" value={selectedUser} onChange={this.handleUserChange} className="text-black w-full p-2 border border-[#00acc1] rounded-md">
                <option value="">Select User</option>
                {usersAscending.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} :: {user.email} :: Rs {user.wallet_amount}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="payment-method" className="block text-md">Payment Method</label>
              <select id="payment-method" value={paymentMethod} onChange={this.handlePaymentMethodChange} className="text-black w-full p-2 border border-[#00acc1] rounded-md">
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            <label htmlFor="amount" className="block text-md">Add Amount in Wallet</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={this.handleInputChange}
              placeholder="Enter Wallet Amount"
              className="text-black w-full p-2 mb-4 border border-[#00acc1] rounded-md"
            />

            <div className="w-full text-center">
              <button className="w-fit px-12 mx-auto bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none" onClick={this.handleAdminForm}>
                Add
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-8 mt-4 mb-4 p-6 rounded-md text-black border-[1.5px] border-[#00acc1]">
            <div className="mb-4">
              <label htmlFor="user" className="block text-lg mb-2">Select User</label>
              <select id="user" onChange={this.handleUserChange} className="text-black w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select User</option>
                {usersAscending.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} :: {user.email} :: Rs {user.wallet_amount}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="payment-method" className="block text-lg mb-2">Payment Method</label>
              <select id="payment-method" value={paymentMethod} onChange={this.handlePaymentMethodChange} className="text-black w-full p-2 border border-gray-300 rounded-md">
                {paymentMethods.map((method) => (
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
              <button onClick={() => this.handleOptionClick("20000")} className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none">+20,000</button>
              <button onClick={() => this.handleOptionClick("50000")} className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none">+50,000</button>
              <button onClick={() => this.handleOptionClick("100000")} className="w-fit px-5 bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none">+1,00,000</button>
            </div>

            <div className="flex justify-between text-lg mb-4">
              <div className="flex-1">
                <p>Tax (18%):</p>
                <p>Total Amount:</p>
              </div>
              <div className="flex-1 text-right">
                <p>{tax} ₹</p>
                <p>{totalAmount} ₹</p>
              </div>
            </div>

            <button className="w-full bg-[#00acc1] text-black py-2 rounded-md hover:bg-[#1dc6dc] focus:outline-none" onClick={this.handleUserForm}>
              Add
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default AdminUserWallet;
