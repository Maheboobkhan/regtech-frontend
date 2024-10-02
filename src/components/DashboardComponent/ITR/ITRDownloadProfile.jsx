import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ITRProfile = () => {
  const [clientId, setClientId] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.post(
        `${domain}/itr_download_profile`,
        { client_id: clientId },
        { headers: { AccessToken: token } }
      );

      console.log(response);

      setProfileData(response.data);
    } catch (err) {
      setError('Internal Server Error, please try again.');
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">ITR Profile</h3>
        </div>
        <div className="p-4">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group mb-4">
              <label htmlFor="client_id" className="block text-gray-700 text-sm font-bold mb-2">Client ID</label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={clientId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: itr_glvFpjIAxwsdscTEHYy"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              GET Details
            </button>
          </form>

          {loading && <div className="text-blue-500 mt-4">Loading...</div>}

          {profileData && (
            <div className={`mt-6 p-4 rounded ${profileData.status_code === 200 ? 'bg-green-400' : 'bg-red-500'} text-white`}>
              <h3 className="text-lg font-semibold">ITR Profile Details</h3>
              {profileData.status_code === 200 ? (
                <div>
                  <h4>PAN Details:</h4>
                  <p><strong>PAN No:</strong> {profileData.data.profile_details.pan.pan}</p>
                  <p><strong>PAN Holder Name:</strong> {profileData.data.profile_details.pan.name}</p>
                  <p><strong>DOB:</strong> {profileData.data.profile_details.pan.dob}</p>
                  <p><strong>Gender:</strong> {profileData.data.profile_details.pan.gender}</p>
                  <p><strong>Category:</strong> {profileData.data.profile_details.pan.category}</p>
                  <p><strong>Address:</strong> {profileData.data.profile_details.pan.address}</p>
                  <p><strong>Indian Citizen:</strong> {profileData.data.profile_details.pan.indian_citizen}</p>
                  <p><strong>Status:</strong> {profileData.data.profile_details.pan.status}</p>

                  <h4>Jurisdiction Details:</h4>
                  <p><strong>Area Code:</strong> {profileData.data.profile_details.jurisdiction.area_code}</p>
                  <p><strong>AO Type:</strong> {profileData.data.profile_details.jurisdiction.ao_type}</p>
                  <p><strong>Range Code:</strong> {profileData.data.profile_details.jurisdiction.range_code}</p>
                  <p><strong>AO Number:</strong> {profileData.data.profile_details.jurisdiction.ao_number}</p>
                  <p><strong>Jurisdiction:</strong> {profileData.data.profile_details.jurisdiction.jurisdiction}</p>
                  <p><strong>Building Name:</strong> {profileData.data.profile_details.jurisdiction.building_name}</p>
                  <p><strong>Email ID:</strong> {profileData.data.profile_details.jurisdiction.email_id}</p>

                  <h4>Address Details:</h4>
                  <p><strong>Country:</strong> {profileData.data.profile_details.address.country}</p>
                  <p><strong>Door Number:</strong> {profileData.data.profile_details.address.door_number}</p>
                  <p><strong>Street:</strong> {profileData.data.profile_details.address.street}</p>
                  <p><strong>Pin Code:</strong> {profileData.data.profile_details.address.pin_code}</p>
                  <p><strong>Zip Code:</strong> {profileData.data.profile_details.address.zip_code}</p>
                  <p><strong>Locality:</strong> {profileData.data.profile_details.address.locality}</p>
                  <p><strong>Post Office:</strong> {profileData.data.profile_details.address.post_office}</p>
                  <p><strong>City:</strong> {profileData.data.profile_details.address.city}</p>
                  <p><strong>State:</strong> {profileData.data.profile_details.address.state}</p>

                  <h4>Contact Details:</h4>
                  <p><strong>Resident:</strong> {profileData.data.profile_details.contact.resident}</p>
                  <p><strong>Non-Resident:</strong> {profileData.data.profile_details.contact.non_resident}</p>
                  <p><strong>Primary Mobile:</strong> {profileData.data.profile_details.contact.primary_mobile}</p>
                  <p><strong>Primary Email:</strong> {profileData.data.profile_details.contact.primary_email}</p>

                  <h4>Aadhaar Details:</h4>
                  <p><strong>Aadhaar Number:</strong> {profileData.data.profile_details.aadhaar.aadhaar_number}</p>
                  <p><strong>Aadhaar Status:</strong> {profileData.data.profile_details.aadhaar.aadhaar_status}</p>

                  <p><strong>Status Code:</strong> {profileData.status_code}</p>
                  <p><strong>Status:</strong> {profileData.success}</p>
                  <p><strong>Message:</strong> {profileData.message}</p>
                  <p><strong>Message Code:</strong> {profileData.message_code}</p>
                </div>
              ) : (
                <p>Verification: Failed (Incorrect Client ID / Expired)</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ITRProfile;
