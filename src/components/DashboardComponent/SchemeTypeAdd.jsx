import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withRouter from './withRouter'; // Assuming this is a custom higher-order component

class SchemeTypeAdd extends Component {
  state = {
    name: '',
    hitLimit: '',
    submitting: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, hitLimit } = this.state;

    // Validate input
    if (!name || !hitLimit) {
      toast.error('Please fill in all fields');
      return;
    }

    this.setState({ submitting: true });
    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.post(`${domain}/addschemetypemaster`, {
        scheme_name: name,
        hit_limits: hitLimit
      });
      console.log(response);

      this.setState({ name: '', hitLimit: '', submitting: false });

      if (response.data[0] === 'success') {
        toast.success(response.data[1]);
        setTimeout(() => {
            this.props.navigate('/dashboard/schemetypeList');
        }, 2000);
      } else if (response.data[0] === 'warning') {
        toast.warn(response.data[1]);
      } else if (response.data[0] === 'error') {
        toast.error(response.data[1]);
      }
    } catch (error) {
      toast.error('An error occurred while adding the scheme');
      this.setState({ submitting: false });
    }
  };

  render() {
    const { name, hitLimit, submitting } = this.state;

    return (
      <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-black mb-4">Add New Scheme</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2" htmlFor="name">Scheme Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00acc1] transition duration-300 ease-in-out"
                placeholder="Enter scheme name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2" htmlFor="hitLimit">Hit Limit</label>
              <input
                type="number"
                id="hitLimit"
                name="hitLimit"
                value={hitLimit}
                onChange={this.handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00acc1] transition duration-300 ease-in-out"
                placeholder="Enter hit limit"
              />
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2 bg-[#00acc1] text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Add Scheme'}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(SchemeTypeAdd);
