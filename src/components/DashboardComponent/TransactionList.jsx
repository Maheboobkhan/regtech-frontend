import React, { Component } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineLockReset } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 10,
      transactions: [],
      currentPage: 1,
      totalPages: 1,
      searchQuery: "",
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.getAllTransactions();
  }

  getAllTransactions = async (page = 1) => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.get(
        `${domain}/getalltransactions/${token}`,
        {
          params: {
            page,
            perPage: this.state.perPage,
            searchQuery: this.state.searchQuery,
          },
        }
      );
      this.setState({
        transactions: response.data.data,
        currentPage: response.data.current_page,
        totalPages: response.data.last_page,
        error: null,
      });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  handlePerPageChange = (event) => {
    this.setState(
      { perPage: Number(event.target.value), currentPage: 1 },
      () => {
        this.getAllTransactions(1);
      }
    );
  };

  handleSearchChange = (event) => {
    this.setState(
      { searchQuery: event.target.value.toLowerCase(), currentPage: 1 },
      () => {
        this.getAllTransactions(1);
      }
    );
  };

  handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= this.state.totalPages) {
      this.setState({ currentPage: newPage }, () => {
        this.getAllTransactions(newPage);
      });
    }
  };

  render() {
    const {
      perPage,
      currentPage,
      transactions,
      totalPages,
      searchQuery,
      error,
      loading,
    } = this.state;

    return (
      <div className="container mx-auto md:mt-0 mt-20 p-4">
        <div className="bg-teal-500 text-white p-4 rounded-lg flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Transaction List</h1>
          <Link to="/dashboard/adduser">
            <button disabled={true} className="bg-black hover:bg-opacity-20 hover:border-[1.5px] transition-all hover:border-black text-white pl-2 pr-3 py-2 rounded-lg flex items-center">
              <BsPlusLg className="text-xl mr-1" /> Add Wallet Balance
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4 md:flex md:flex-row flex-col items-center">
            <label htmlFor="search" className="mr-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by transaction ID, date, or type"
              className="p-2 border rounded-lg w-full md:w-1/3"
              onChange={this.handleSearchChange}
              value={searchQuery}
            />
            <label htmlFor="perPage" className="ml-10 mr-1">
              Show{" "}
            </label>
            <select
              id="perPage"
              className="p-2 border rounded-lg"
              value={perPage}
              onChange={this.handlePerPageChange}
            >
              <option value={10}>10 per Page</option>
              <option value={25}>25 per Page</option>
              <option value={50}>50 per Page</option>
              <option value={100}>100 per Page</option>
            </select>
          </div>

          {loading && <div className="text-center p-4">Loading...</div>}

          {!loading && error && (
            <div className="text-center p-4 text-red-500">{error}</div>
          )}
          {!loading && !error && (
            <div className="md:overflow-x-hidden overflow-x-auto">
              <table className="min-w-full text-left border-collapse md:overflow-x-hidden">
                <thead>
                  <tr className="bg-teal-500 text-white">
                    <th className="p-2">Trns Id</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Remark</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((trans, index) => (
                    <tr key={index}>
                      <td className="px-2 py-5 border-b">
                        {trans.transaction_id}
                      </td>
                      <td className="px-2 py-5 border-b">Credit/Debit</td>
                      {trans.type_creditdebit === "Debit" ? (
                        <div className="flex items-center">
                          <IoMdArrowRoundDown className="text-red-500" />
                          <td className="px-2 py-5 border-b">
                            {trans.type_creditdebit}
                          </td>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <IoMdArrowRoundUp className="text-green-500" />
                          <td className="px-2 py-5 border-b">
                            {trans.type_creditdebit}
                          </td>
                        </div>
                      )}
                      <td className="border-b">
                        <button className="px-2 py-1 cursor-text rounded-md md:text-base text-sm">
                          {trans.amount}
                        </button>
                      </td>
                      <td className="border-b">
                        <button
                          className={`px-2 py-1 pr-5 ${
                            trans.status === "Success"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {trans.status}
                        </button>
                      </td>
                      <td className={`px-2 py-5 border-b ${trans.remark === 'Transaction Successful' ? 'text-green-500': 'text-red-500'}`}>{trans.remark}</td>
                      <td className="px-2 py-5 border-b">{trans.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="mt-4 flex justify-between items-center">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => this.handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => this.handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionList;
