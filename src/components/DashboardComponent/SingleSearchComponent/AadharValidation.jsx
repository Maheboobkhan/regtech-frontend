import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

class AadhaarValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhaarNumber: "",
      response: null,
      error: null,
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ aadhaarNumber: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    this.setState({ loading: true });

    const domain = localStorage.getItem('domain');

    axios.post(
        'http://regtechapi.in/api/seachv4',
        { aadhaar_number: this.state.aadhaarNumber },
        {
          headers: {
            'AccessToken': token // Send the token in the header
          }
        }
      )
      .then((response) => {
        console.log(response)
        this.setState({
          response: response.data,
          error: null,
          loading: false,
          aadhaarNumber: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Error verifying Aadhaar number",
          loading: false,
        });
      });
  };

  render() {
    const { aadhaarNumber, response, error, loading } = this.state;

    return (
        <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">
                  Fetching Aadhaar details <span className="text-blue-300">please wait...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={this.handleSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="aadhaar_number"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaar_number"
                  name="aadhaar_number"
                  value={aadhaarNumber}
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ex: 1111 2222 3333"
                  required
                  maxLength="12"
                  minLength="12"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              >
                Verify
              </button>
            </form>
            {response && (
              <>
                {response[0]?.statusCode === '200' && (
                  <div className="bg-blue-400 text-white p-3 rounded mt-4">
                    <h3 className="text-lg font-semibold">Aadhaar Details</h3>
                    <p>Aadhaar Verification: {response[0]?.aadhaar_validation.data.aadhaar_number}</p>
                    <p>Age Range: {response[0]?.aadhaar_validation.data.age_range}</p>
                    <p>Gender: {response[0]?.aadhaar_validation.data.gender}</p>
                    <p>Mobile: {response[0]?.aadhaar_validation.data.is_mobile}</p>
                    <p>State: {response[0]?.aadhaar_validation.data.state}</p>
                  </div>
                )}
                {response[0]?.aadhaar_validation?.status?.statusCode === '404' && (
                  <div className="bg-red-500 text-white p-3 rounded mb-4">
                    {response[0]?.aadhaar_validation?.response}
                  </div>
                )}
                {response[0]?.aadhaar_validation?.status?.statusCode === '500' && (
                  <div className="bg-red-500 text-white p-3 rounded mb-4">
                    Internal Server Error. Please contact techsupport@docboyz.in for more details.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
    );
  }
}

export default AadhaarValidation;
