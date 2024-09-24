import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

class AadharCardOCR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      response: null,
      error: null,
      loading: false,
    };
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { file } = this.state;
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    if (!file) {
      this.setState({ error: "Please upload an Aadhar card image" });
      return;
    }

    this.setState({ loading: true });

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/aadharcard_ocr",
        {'file': file},
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      this.setState({
        response: response.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.response ? error.response.data.message : "Error submitting form",
        loading: false,
      });
    }
  };

  render() {
    const { file, response, error, loading } = this.state;

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4">
            <h3 className="text-xl font-semibold text-white">Aadharcard OCR</h3>
          </div>
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">
                  Uploading file <span className="text-blue-300">please wait...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={this.handleSubmit} className="mt-4" encType="multipart/form-data">
              <div className="mb-4">
                <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                  Aadharcard Upload
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={this.handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
              >
                Upload
              </button>
            </form>
            {response && response.status_code === 200 && (
              <div className="bg-green-400 text-white p-3 rounded mt-4">
                <h3 className="text-lg font-semibold">Aadhar Details</h3>
                <p><strong>Aadhar Description: </strong>
                  {response.aadharcard.raw_ocr_texts ? response.aadharcard.raw_ocr_texts.join(', ') : "null"}
                </p>
                <p><strong>Date of Birth: </strong>
                  {response.aadharcard.date_of_birth || 'null'}
                </p>
                <p><strong>Aadhar Number: </strong>
                  {response.aadharcard.aadhar_number || 'null'}
                </p>
                <p><strong>Name: </strong>
                  {response.aadharcard.name || 'null'}
                </p>
                <p><strong>Gender: </strong>
                  {response.aadharcard.gender || 'null'}
                </p>
              </div>
            )}
            {response && response.status_code === 102 && (
              <div className="bg-red-500 text-white p-3 rounded mt-4">
                Invalid file type, must be an Aadhar card image.
              </div>
            )}
            {response && response.status_code === 404 && (
              <div className="bg-red-500 text-white p-3 rounded mt-4">
                No file provided.
              </div>
            )}
            {response && response.status_code === 500 && (
              <div className="bg-red-500 text-white p-3 rounded mt-4">
                Internal Server Error. Please contact techsupport@docboyz.in for more details.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AadharCardOCR;
