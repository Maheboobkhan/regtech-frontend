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
            {/* <div className="bg-blue-400 text-white p-3 rounded mt-4"> */}
            {response && response[0]?.aadhaar_otp_submit?.statusCode === 200 && (
              // <div className="bg-blue-400 text-white p-3 rounded mt-4">
              <div className="bg-green-100 text-green-800 p-3 rounded mt-4 space-y-2">
                <h3 className="text-2xl mb-3 font-bold">Aadhaar Card Details</h3>
                <p><span className='text-lg font-semibold'>client_id:</span> {response[0].aadhaar_otp_submit.data.client_id}</p>
                <p><span className='text-lg font-semibold'>full_name:</span> {response[0].aadhaar_otp_submit.data.full_name}</p>
                <p><span className='text-lg font-semibold'>aadhaar_number:</span> {response[0].aadhaar_otp_submit.data.aadhaar_number}</p>
                <p><span className='text-lg font-semibold'>dob:</span> {response[0].aadhaar_otp_submit.data.dob}</p>
                <p><span className='text-lg font-semibold'>gender:</span> {response[0].aadhaar_otp_submit.data.gender}</p>
                <p><span className='text-lg font-semibold'>country:</span> {response[0].aadhaar_otp_submit.data.address.country}</p>
                <p><span className='text-lg font-semibold'>dist:</span> {response[0].aadhaar_otp_submit.data.address.dist}</p>
                <p><span className='text-lg font-semibold'>state:</span> {response[0].aadhaar_otp_submit.data.address.state}</p>
                <p><span className='text-lg font-semibold'>po:</span> {response[0].aadhaar_otp_submit.data.address.po}</p>
                <p><span className='text-lg font-semibold'>loc:</span> {response[0].aadhaar_otp_submit.data.address.loc}</p>
                <p><span className='text-lg font-semibold'>vtc:</span> {response[0].aadhaar_otp_submit.data.address.vtc}</p>
                <p><span className='text-lg font-semibold'>subdist:</span> {response[0].aadhaar_otp_submit.data.address.subdist}</p>
                <p><span className='text-lg font-semibold'>street:</span> {response[0].aadhaar_otp_submit.data.address.street}</p>
                <p><span className='text-lg font-semibold'>house:</span> {response[0].aadhaar_otp_submit.data.address.house}</p>
                <p><span className='text-lg font-semibold'>landmark:</span> {response[0].aadhaar_otp_submit.data.address.landmark}</p>
                <p><span className='text-lg font-semibold'>face_status:</span> {response[0].aadhaar_otp_submit.data.face_status}</p>
                <p><span className='text-lg font-semibold'>face_score:</span> {response[0].aadhaar_otp_submit.data.face_score}</p>
                <p><span className='text-lg font-semibold'>zip:</span> {response[0].aadhaar_otp_submit.data.zip}</p>
                <p><span className='text-lg font-semibold'>profile_image:</span> <br /><img src={`data:image/jpeg;base64,${response[0].aadhaar_otp_submit.data.profile_image}`} alt="Profile" /></p>
                <p><span className='text-lg font-semibold'>has_image:</span> {response[0].aadhaar_otp_submit.data.has_image ? 'Yes' : 'No'}</p>
                <p><span className='text-lg font-semibold'>raw_xml:</span> <a href={response[0].aadhaar_otp_submit.data.raw_xml} className="btn btn-success">Download</a></p>
                <p><span className='text-lg font-semibold'>zip_data:</span> <a href={response[0].aadhaar_otp_submit.data.zip_data} className="btn btn-success">Download</a></p>
                <p><span className='text-lg font-semibold'>care_of:</span> {response[0].aadhaar_otp_submit.data.care_of}</p>
                <p><span className='text-lg font-semibold'>share_code:</span> {response[0].aadhaar_otp_submit.data.share_code}</p>
                <p><span className='text-lg font-semibold'>mobile_verified:</span> {response[0].aadhaar_otp_submit.data.mobile_verified ? 'Yes' : 'No'}</p>
                <p><span className='text-lg font-semibold'>reference_id:</span> {response[0].aadhaar_otp_submit.data.reference_id}</p>
                <p><span className='text-lg font-semibold'>aadhaar_pdf:</span> {response[0].aadhaar_otp_submit.data.aadhaar_pdf}</p>
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
