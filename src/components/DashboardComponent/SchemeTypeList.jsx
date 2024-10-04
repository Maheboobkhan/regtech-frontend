import React, { Component } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import withRouter from './withRouter';
import { toast } from 'react-toastify';

class SchemeTypeMaster extends Component {
  state = {
    schemeTypeMaster: [],
    showModal: false,
    deleteId: null,
  };

  componentDidMount() {
    this.getSchemeTypeMaster();
  }

  getSchemeTypeMaster = async () => {
    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.get(`${domain}/getschemetypemaster`);
      this.setState({ schemeTypeMaster: response.data });
    } catch (error) {
      console.error("There was an error fetching the scheme types!", error);
    }
  };

  handleEdit = (id) => {
    this.props.navigate(`/dashboard/schemetypeEdit/${id}`);
  };

  handleDelete = (id) => {
    this.setState({ showModal: true, deleteId: id });
  };

  confirmDelete = async () => {
    const domain = localStorage.getItem('domain');
    const { deleteId } = this.state;
      const response = await axios.post(`${domain}/deleteschemetypemaster/${deleteId}`);
      
      this.setState({ showModal: false, deleteId: null });
      if(response.data[0] === 'success'){
        toast.success('Scheme Type Deleted Successfully');
      }
      if(response.data[0] === 'error'){
        toast.error(response.data[1]);
      }
      this.getSchemeTypeMaster(); // Refresh the list
  };

  cancelDelete = () => {
    this.setState({ showModal: false, deleteId: null });
  };

  render() {
    const { schemeTypeMaster, showModal } = this.state;
    return (
      <div className="p-8 bg-gray-100 min-h-screen relative">
        <h1 className="text-4xl font-extrabold text-black mb-6">Scheme Type Master</h1>
        <Link to='/dashboard/schemetypeAdd'>
          <button
            className="mb-6 px-6 py-3 bg-[#00acc1] text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            Add
          </button>
        </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-[#00acc1] text-white">
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">Sr No</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">Name</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">Hit Limit</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {schemeTypeMaster.map((scheme, index) => (
                <tr key={scheme.id} className={`even:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">{scheme.name}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">{scheme.hit_limits}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                    <button
                      className="text-[#00acc1] hover:text-teal-600 transition duration-300 ease-in-out mr-3"
                      onClick={() => this.handleEdit(scheme.id)}
                    >
                      <FaEdit size={16} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                      onClick={() => this.handleDelete(scheme.id)}
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Delete Confirmation */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
              <p className="mb-4">Are you sure you want to delete this scheme?</p>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out mr-2"
                  onClick={this.cancelDelete}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={this.confirmDelete}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SchemeTypeMaster);
