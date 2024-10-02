import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class AadhaarOtpSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '',
      otp: '',
      response: null,
      error: null,
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    axios.post(
      `${domain}/aadhaar_otp_submit`,
      `client_id=${this.state.clientId}&otp=${this.state.otp}`,
      {
        headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
        'AccessToken': token
        },
      }
    )
      .then((response) => {
        this.setState({
          response: response.data,
          loading: false,
          clientId: '',
          otp: '',
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Error submitting OTP',
          loading: false,
        });
      });
  };

  render() {
    const { clientId, otp, response, error, loading } = this.state;

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4 flex justify-between">
            <h3 className="text-xl font-semibold text-white">
              Aadhaar OTP Submit
            </h3>
            <Link
              to="/dashboard/kyc/aadhaar_api"
              className="text-white underline hover:text-blue-100"
            >
              Aadhaar APIs
            </Link>
          </div>
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">
                  Submitting OTP <span className="text-blue-300">please wait...</span>
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
                  htmlFor="client_id"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Client ID
                </label>
                <input
                  type="text"
                  id="client_id"
                  name="clientId"
                  value={clientId}
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Client ID"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ex: 123456"
                  required
                  maxLength="6"
                  minLength="6"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              >
                Submit OTP
              </button>
            </form>
            {response && response[0]?.aadhaar_otp_submit?.statusCode === 200 && (
              <div className="bg-blue-400 text-white p-3 rounded mt-4">
                <h3 className="text-lg font-semibold">Aadhaar Card Details</h3>
                <p>client_id: {response[0].aadhaar_otp_submit.data.client_id}</p>
                <p>full_name: {response[0].aadhaar_otp_submit.data.full_name}</p>
                <p>aadhaar_number: {response[0].aadhaar_otp_submit.data.aadhaar_number}</p>
                <p>dob: {response[0].aadhaar_otp_submit.data.dob}</p>
                <p>gender: {response[0].aadhaar_otp_submit.data.gender}</p>
                <p>country: {response[0].aadhaar_otp_submit.data.address.country}</p>
                <p>dist: {response[0].aadhaar_otp_submit.data.address.dist}</p>
                <p>state: {response[0].aadhaar_otp_submit.data.address.state}</p>
                <p>po: {response[0].aadhaar_otp_submit.data.address.po}</p>
                <p>loc: {response[0].aadhaar_otp_submit.data.address.loc}</p>
                <p>vtc: {response[0].aadhaar_otp_submit.data.address.vtc}</p>
                <p>subdist: {response[0].aadhaar_otp_submit.data.address.subdist}</p>
                <p>street: {response[0].aadhaar_otp_submit.data.address.street}</p>
                <p>house: {response[0].aadhaar_otp_submit.data.address.house}</p>
                <p>landmark: {response[0].aadhaar_otp_submit.data.address.landmark}</p>
                <p>face_status: {response[0].aadhaar_otp_submit.data.face_status}</p>
                <p>face_score: {response[0].aadhaar_otp_submit.data.face_score}</p>
                <p>zip: {response[0].aadhaar_otp_submit.data.zip}</p>
                <p>profile_image: <br /><img src={`data:image/jpeg;base64,${response[0].aadhaar_otp_submit.data.profile_image}`} alt="Profile" /></p>
                <p>has_image: {response[0].aadhaar_otp_submit.data.has_image ? 'Yes' : 'No'}</p>
                <p>raw_xml: <a href={response[0].aadhaar_otp_submit.data.raw_xml} className="btn btn-success">Download</a></p>
                <p>zip_data: <a href={response[0].aadhaar_otp_submit.data.zip_data} className="btn btn-success">Download</a></p>
                <p>care_of: {response[0].aadhaar_otp_submit.data.care_of}</p>
                <p>share_code: {response[0].aadhaar_otp_submit.data.share_code}</p>
                <p>mobile_verified: {response[0].aadhaar_otp_submit.data.mobile_verified ? 'Yes' : 'No'}</p>
                <p>reference_id: {response[0].aadhaar_otp_submit.data.reference_id}</p>
                <p>aadhaar_pdf: {response[0].aadhaar_otp_submit.data.aadhaar_pdf}</p>
              </div>
            )}
            {response && response[0]?.aadhaar_otp_submit?.statusCode === 404 && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                Server Error, Please try later
              </div>
            )}
            {response && response[0]?.aadhaar_otp_submit?.statusCode === 500 && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                Internal Server Error. Please contact techsupport@docboyz.in for more details.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AadhaarOtpSubmit;
