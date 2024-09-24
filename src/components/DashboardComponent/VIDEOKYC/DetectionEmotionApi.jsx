import React, { useState } from 'react';

const DetectionEmotionAPI = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showDecatedEmotion, setShowDecatedEmotion] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleDecatedEmotion = () => {
    setShowDecatedEmotion(!showDecatedEmotion);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {/* Decated Emotion APIs */}
        <div
          className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
            showDecatedEmotion ? 'h-auto' : 'h-18 flex items-center'
          }`}
        >
          <h3
            className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
              showDecatedEmotion ? 'bg-[#4cb4ff] text-white' : ''
            }`}
            onClick={toggleDecatedEmotion}
          >
            Decated Emotion APIs
          </h3>

          {showDecatedEmotion && (
            <div className="space-y-4 mt-2 transition-all duration-300">
              {/* Decated Emotion Details */}
              <div
                className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                onClick={() => toggleSection('decatedEmotionDetails')}
              >
                <h4 className="font-semibold underline">Decated Emotion</h4>
              </div>
              {expandedSection === 'decatedEmotionDetails' && (
                <div className="p-4 border border-black rounded">
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/detection_emotion
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`{
  "image_file": "happy.jpg"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded mt-2">
                    {`[
  {
    "statusCode": 200,
    "response": {
      "emotion": "true"
    }
  }
]`}
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

export default DetectionEmotionAPI;
