import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

class AadhaarMasking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileBack: null,
      response: null,
      error: null,
      loading: false,
    };
  }

  handleFileChange = (e) => {
    if (e.target.name === 'file') {
      this.setState({ file: e.target.files[0] });
    } else if (e.target.name === 'file_back') {
      this.setState({ fileBack: e.target.files[0] });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { file, fileBack } = this.state;
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    if (!file) {
      this.setState({ error: "Please upload Aadhaar Front image" });
      return;
    }

    const formData = new FormData();
    formData.append('aadharcard_img1', file);
    if (fileBack) {
      formData.append('file_back', fileBack);
    }

    this.setState({ loading: true });

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        formData,
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response)
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
    const { file, fileBack, response, error, loading } = this.state;

    return (
    //   <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4">
            <h3 className="text-xl font-semibold text-white">Aadhaar Masking</h3>
          </div>
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">
                  Uploading files <span className="text-blue-300">please wait...</span>
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
                  Aadhaar Front
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
              <div className="mb-4">
                <label htmlFor="file_back" className="block text-gray-700 text-sm font-bold mb-2">
                  Aadhaar Back
                </label>
                <input
                  type="file"
                  id="file_back"
                  name="file_back"
                  onChange={this.handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              >
                Upload
              </button>
            </form>
            {response && response.status_code === 200 && (
              <div className="bg-blue-400 text-white p-3 rounded mt-4 mb-4">
                <h1 className="text-lg font-semibold">Aadhaar Details</h1>
                <p><strong>Aadhaar Number: </strong>{response.data.ocr_fields[0].aadhaar_number.value}</p>
                <p><strong>Full Name: </strong>{response.data.ocr_fields[0].full_name.value}</p>
                <p><strong>Gender: </strong>{response.data.ocr_fields[0].gender.value}</p>
                <p><strong>DOB: </strong>{response.data.ocr_fields[0].dob.value}</p>
                {response.data.ocr_fields[1] && (
                  <>
                    <p><strong>Address: </strong>{response.data.ocr_fields[1].address.value}</p>
                    <p><strong>City: </strong>{response.data.ocr_fields[1].address.city}</p>
                    <p><strong>State: </strong>{response.data.ocr_fields[1].address.state}</p>
                    <p><strong>Pincode: </strong>{response.data.ocr_fields[1].address.zip}</p>
                  </>
                )}
                <p><strong>Masked Aadhaar Front: </strong></p>
                <img src={response.data.ocr_fields[0].masked_image} alt="Masked Aadhaar Front" style={{ width: '100%' }} />
                {response.data.ocr_fields[1] && response.data.ocr_fields[1].masked_image && (
                  <>
                    <p className="mt-4"><strong>Masked Aadhaar Back: </strong></p>
                    <img src={response.data.ocr_fields[1].masked_image} alt="Masked Aadhaar Back" style={{ width: '100%' }} />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
    //   </div>
    );
  }
}

export default AadhaarMasking;
