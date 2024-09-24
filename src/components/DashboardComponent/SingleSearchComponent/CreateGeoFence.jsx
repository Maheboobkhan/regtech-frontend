import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CreateGeofence = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [radius, setRadius] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get("authToken");
      const headers = {
        AccessToken: token,
      };
      const res = await axios.post(
        "http://regtechapi.in/api/seachv4",
        { longitude:longitude, latitude:latitude, radius:radius, address_type: 'create_geofence' },
        { headers }
      );
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError(
        "Internal server error. Please contact techsupport@docboyz.in for more details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-semibold text-white">
            Create Geofence API
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
                htmlFor="longitude"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Longitude
              </label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                value={longitude}
                onChange={handleLongitudeChange}
                placeholder="Enter a Longitude"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <label
                htmlFor="latitude"
                className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              >
                Latitude
              </label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                value={latitude}
                onChange={handleLatitudeChange}
                placeholder="Enter a Latitude"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <label
                htmlFor="radius"
                className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              >
                Radius
              </label>
              <input
                type="number"
                id="radius"
                name="radius"
                value={radius}
                onChange={handleRadiusChange}
                placeholder="Enter a radius"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min="1"
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
          {response && (
            <>
              {response.status_code === 200 && (
                <div className="card card-success mt-4">
                  <div className="card-header">
                    <h3 className="card-title">Create Geofence Details</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <p>
                            <strong>CreateTime:&nbsp;&nbsp;</strong>
                            {response.data?.CreateTime || "null"}
                          </p>
                          <p>
                            <strong>GeofenceId:&nbsp;&nbsp;</strong>
                            {response.data?.GeofenceId || "null"}
                          </p>
                          <p>
                            <strong>UpdateTime:&nbsp;&nbsp;</strong>
                            {response.data?.UpdateTime || "null"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(response.status_code === 102 ||
                response.status_code === 103 ||
                response.status_code === 403) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.error_message || "An error occurred."}
                </div>
              )}

              {response.status_code === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message || "An error occurred."}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    // </div>
  );
};

export default CreateGeofence;
