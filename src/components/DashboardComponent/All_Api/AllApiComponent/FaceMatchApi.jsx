import React, { useState } from 'react';

const FaceMatchAPI = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showFaceMatch, setShowFaceMatch] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleFaceMatch = () => {
    setShowFaceMatch(!showFaceMatch);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {/* Face Match Section */}
        <div
          className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
            showFaceMatch ? 'h-auto transition-all duration-300' : 'h-18 flex items-center'
          }`}
        >
          <h3
            className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
              showFaceMatch ? 'bg-[#4cb4ff] text-white' : ''
            }`}
            onClick={toggleFaceMatch}
          >
            Face Match API
          </h3>

          {showFaceMatch && (
            <div className="space-y-4 mt-2 transition-all duration-300">
              {/* Face Match Details */}
              <div
                className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                onClick={() => toggleSection('faceMatchDetails')}
              >
                <h4 className="font-semibold underline">Face Match</h4>
              </div>
              {expandedSection === 'faceMatchDetails' && (
                <div className="p-4 border border-black rounded">
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/face_match
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`{
  "doc_img": "{{@doc_img}}",
  "selfie": "{{@selfie}}"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`[
  {
    "face_match": { 
      "code": "200",
      "status": "success",  
      "response": {
        "confidence": "100%"
      },
    },
    "statusCode": "200"
  }
]`}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default FaceMatchAPI;
