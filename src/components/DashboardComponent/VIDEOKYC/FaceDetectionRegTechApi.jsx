import React, { useState } from 'react';

const FaceDetectionAPI = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showFaceDetection, setShowFaceDetection] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleFaceDetection = () => {
    setShowFaceDetection(!showFaceDetection);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {/* Face Detection APIs */}
        <div
          className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
            showFaceDetection ? 'h-auto' : 'h-18 flex items-center'
          }`}
        >
          <h3
            className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
              showFaceDetection ? 'bg-[#4cb4ff] text-white' : ''
            }`}
            onClick={toggleFaceDetection}
          >
            Face Detection APIs
          </h3>

          {showFaceDetection && (
            <div className="space-y-4 mt-2 transition-all duration-300">
              {/* Face Detection Details */}
              <div
                className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                onClick={() => toggleSection('faceDetectionDetails')}
              >
                <h4 className="font-semibold underline">Face Detection</h4>
              </div>
              {expandedSection === 'faceDetectionDetails' && (
                <div className="p-4 border border-black rounded">
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/detection_face
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`{
  "file": "happy.jpg"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`{
  "data": {
    "EHhvwn8H9Y0zwxBqmqXdjqVvp914lguL1dHh1C3h1nxBhY9XMl/a6LbwQwveQLczy2csa/pt/wcE6gnz4Q8NftWaZ/wUM+EPwwtPEfiPT/k8SeGHlEbXq7fL"
  },
  "statusCode": 200
}`}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center mt-4">
          <button
            className="bg-blue-300 text-white py-2 px-4 rounded"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceDetectionAPI;
