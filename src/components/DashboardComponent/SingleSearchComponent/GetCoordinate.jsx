import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const GetCoordinateAPI = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCoordinates([]);

    try {
      const token = Cookies.get("authToken");
      const headers = { AccessToken: token };
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        { address:address, address_type: 'get_coordinate' },
        { headers }
      );
      console.log(response);
      setCoordinates(response.data || []);
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 102:
          case 103:
          case 403:
            setError(err.response.data.error_message || "An error occurred.");
            break;
          case 500:
            setError(
              "Internal server error. Please contact techsupport@docboyz.in for more details."
            );
            break;
          default:
            setError("An unexpected error occurred.");
        }
      } else {
        setError(
          "Network error. Please contact techsupport@docboyz.in for more details."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-semibold text-white">
            GET Coordinate API
          </h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Processing...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter an address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {coordinates.status_code === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {coordinates.message || "An error occurred."}
                </div>
              )}

          {coordinates.length > 0 && (
            <div className="card card-success mt-4">
              <div className="card-header">
                <h3 className="card-title">Coordinate Details</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        Sr No
                      </th>
                      <th scope="col" className="text-center">
                        Address
                      </th>
                      <th scope="col" className="text-center">
                        Longitude
                      </th>
                      <th scope="col" className="text-center">
                        Latitude
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coordinates.length > 0 ? (
                      coordinates.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.label}</td>
                          {item.point && item.point.length === 2 ? (
                            <>
                              <td>{item.point[0]}</td>
                              <td>{item.point[1]}</td>
                            </>
                          ) : (
                            <td colSpan="2" className="text-center">
                              Invalid Coordinates
                            </td>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No Coordinates
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    // {/* </div> */}
  );
};

export default GetCoordinateAPI;
