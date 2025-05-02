// import React, { useState } from 'react';

// const ApiSection = ({ title, url, method, body, successResponse }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="bg-gray-200 rounded-md mb-4 shadow-md">
//       <h3
//         className={`font-bold text-lg cursor-pointer p-4 ${
//           expanded ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'
//         } rounded-t-md`}
//         onClick={() => setExpanded(!expanded)}
//       >
//         {title}
//       </h3>
//       {expanded && (
//         <div className="p-4 border-t border-gray-300">
//           <p className="mb-2">
//             <b>Hitting URL:</b> {url}
//           </p>
//           <p className="mb-2">
//             <b>Request Method:</b> {method}
//           </p>
//           <p className="mb-2">
//             <b>Request Body:</b>
//           </p>
//           <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
//             {body}
//           </pre>
//           <p className="mt-4 mb-2">
//             <b>Success Response:</b>
//           </p>
//           <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
//             {successResponse}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// const BhunakshaApis = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Bhunaksha APIs</h2>
//       <div className="space-y-4">
//         <ApiSection
//           title="GOA API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "goa",
//   "District": " ",
//   "Taluka": " ",
//   "Village": " ",
//   "Sheetno": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "01,30010002,40113000,000VILLAGE",
//       "Plotinfo": "Taluka Name : BARDEZ \\n Village Name :Aldona \\nSubdiv No :10\\nOccupants Names: 1).Michael Jeremias Da Rocha 2).Denisa Espyie Da Rocha 3). Macberth Jude Simon Da Rocha 4).Malcolm Timothy Feleciano Da Rocha \\nTotal Area:1600.00 sq.m.",
//       "Plotno": "01,30010002,40113000,000VILLAGE"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Odisha API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "odisha",
//   "District": " ",
//   "Tehsil": " ",
//   "Ri": " ",
//   "Village": " ",
//   "Sheetno": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "4,1,1,1,01",
//       "Plotinfo": "ପୂର୍ବାଞ୍ଚଳ ରେଳ ବିଭାଗ ।\\nରକବା  : 2.7 ଏକର୍  , 0 ହେକ୍ଟର  \\n\\n",
//       "Plotno": "30"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Rajasthan API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "rajasthan",
//   "District": " ",
//   "Tehsil": " ",
//   "Ri": " ",
//   "Halkas": " ",
//   "Village": " ",
//   "Sheetno": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "01,002,0745,02920,11035,001",
//       "Plotinfo": "क्षेत्रफल: 51.6100 Hectare\\nखाता संख्या :624\\n1.) वन विभाग हिस्सा- पूर्ण वन-विभाग",
//       "Plotno": "2000"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Jharkhand API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "jharkhand",
//   "District": " ",
//   "Circle": " ",
//   "Halka": " ",
//   "Sheetno": " ",
//   "Plotno": " ",
//   "Mauza": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "02,02,02,0012,null",
//       "Plotinfo": "खतियान :\\nरजिस्टर 2 : \\n क्षेत्रफल  : 1.0 एकड़ 20.0 डिसमील",
//       "Plotno": "139"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Kerala API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "kerala",
//   "District": " ",
//   "Taluk": " ",
//   "Village": " ",
//   "Blockno": " ",
//   "Surveyno": " ",
//   "Subdivno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "050507",
//       "Plotinfo": {
//         "Area_details": "Area : Hectare : 0, Are : 3, Square Metre:1",
//         "Owner_details": "1 : ഏലിയാമ്മ, പത്രോസ്‌ ഭാര്യ -\\nകട്ടേത്ത്‌ പറമ്പില്‍ \\n2 : പത്രോസ്‌യോഹന്നാന്‍,null -\\nഇലഞ്ഞാടിയില്‍",
//         "Remark": "Area : Hectare : 0, Are : 3, Square Metre:1"
//       },
//       "Plotno": "3"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Lakshadweep API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "lakshadweep",
//   "District": " ",
//   "Taluk": " ",
//   "Village": " ",
//   "Survey": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "01,05,015,30",
//       "Plotinfo": "\\nPlot no:30/3\\nArea:26.80\\n-------\\n\\nLandName: Vadak Pandaram\\n\\nOwner : Abdul Rahmankoya haji \\nFamily Name: Pichiyath\\nFather's Name: Nil\\n\\nOwner : Muthubi \\nFamily Name: Nil\\nFather's Name: Koyakidavkoya Pichiyath\\n\\nOwner : Sarifommabi \\nFamily Name: Nil\\nFather's Name: KoyakidavKoyaPichiyath\\n\\nOwner : Ayshabi \\nFamily Name: Nil\\nFather's Name: KoyakidavkoyaPichiyath\\n",
//       "Plotno": "30/3"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Uttar Pradesh API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "up",
//   "District": " ",
//   "Tehsil": " ",
//   "Village": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "137,00730,117944",
//       "Plotinfo": "खाता संख्या : 00039 खसरा संख्या:63 क्षेत्रफल(हे.) : 0.967 \\n\\nखातेदार का नाम :- 00039\\n1 :- नाम :रामचन्द्र संरक्षक का नाम: मुरली सिह निवास स्थान:नि,भटपुरा सकेनिया",
//       "Plotno": "63"
//     }
//   }
// ]`}
//         />
//         <ApiSection
//           title="Chhattisgarh API"
//           url="http://regtechapi.in/bhunaksha"
//           method="POST"
//           body={`{
//   "state": "chhattisgarh",
//   "District": " ",
//   "Tehsil": " ",
//   "Village": " ",
//   "Plotno": " "
// }`}
//           successResponse={`[
//   {
//     "status_code": 200,
//     "data": {
//       "Giscode": "17,15,13,3,6",
//       "Plotinfo": "खाता नंबर: 230\\nकिसान नाम: बबलू कुमार\\nकिसान का पता: गाँव के पश्चिमी छोर पर स्थित",
//       "Plotno": "33"
//     }
//   }
// ]`}
//         />
//       </div>
//     </div>
//   );
// };

// export default BhunakshaApis;

import React, { useState } from "react";

const ApiSection = ({ title, url, method, body, successResponse }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-200 rounded-md mb-4 shadow-md">
      <h3
        className={`font-bold text-lg cursor-pointer p-4 ${
          expanded ? "bg-blue-500 text-white" : "bg-blue-300 text-black"
        } rounded-t-md`}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </h3>
      {expanded && (
        <div className="p-4 border-t border-gray-300">
          <p className="mb-2">
            <b>Hitting URL:</b> {url}
          </p>
          <p className="mb-2">
            <b>Request Method:</b> {method}
          </p>
          <p className="mb-2">
            <b>Request Body:</b>
          </p>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">{body}</pre>
          <p className="mt-4 mb-2">
            <b>Success Response:</b>
          </p>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
            {successResponse}
          </pre>
        </div>
      )}
    </div>
  );
};

const BhunakshaApis = () => {
  const [showApis, setShowApis] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h2
        className={`text-2xl bg-blue-300 p-4 font-bold mb-4 cursor-pointer ${
          showApis ? "bg-blue-500 text-white" : "text-gray-800"
        }`}
        onClick={() => setShowApis(!showApis)}
      >
        Bhunaksha APIs
      </h2>
      {showApis && (
        <div className="space-y-4">
          <ApiSection
            title="GOA API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "goa",
  "District": " ",
  "Taluka": " ",
  "Village": " ",
  "Sheetno": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "01,30010002,40113000,000VILLAGE",
      "Plotinfo": "Taluka Name : BARDEZ \\n Village Name :Aldona \\nSubdiv No :10\\nOccupants Names: 1).Michael Jeremias Da Rocha 2).Denisa Espyie Da Rocha 3). Macberth Jude Simon Da Rocha 4).Malcolm Timothy Feleciano Da Rocha \\nTotal Area:1600.00 sq.m.",
      "Plotno": "01,30010002,40113000,000VILLAGE"
    }
  }
]`}
          />
          <ApiSection
            title="Odisha API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "odisha",
  "District": " ",
  "Tehsil": " ",
  "Ri": " ",
  "Village": " ",
  "Sheetno": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "4,1,1,1,01",
      "Plotinfo": "ପୂର୍ବାଞ୍ଚଳ ରେଳ ବିଭାଗ ।\\nରକବା  : 2.7 ଏକର୍  , 0 ହେକ୍ଟର  \\n\\n",
      "Plotno": "30"
    }
  }
]`}
          />
          <ApiSection
            title="Rajasthan API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "rajasthan",
  "District": " ",
  "Tehsil": " ",
  "Ri": " ",
  "Halkas": " ",
  "Village": " ",
  "Sheetno": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "01,002,0745,02920,11035,001",
      "Plotinfo": "क्षेत्रफल: 51.6100 Hectare\\nखाता संख्या :624\\n1.) वन विभाग हिस्सा- पूर्ण वन-विभाग",
      "Plotno": "2000"
    }
  }
]`}
          />
          <ApiSection
            title="Jharkhand API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "jharkhand",
  "District": " ",
  "Circle": " ",
  "Halka": " ",
  "Sheetno": " ",
  "Plotno": " ",
  "Mauza": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "02,02,02,0012,null",
      "Plotinfo": "खतियान :\\nरजिस्टर 2 : \\n क्षेत्रफल  : 1.0 एकड़ 20.0 डिसमील",
      "Plotno": "139"
    }
  }
]`}
          />
          <ApiSection
            title="Kerala API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "kerala",
  "District": " ",
  "Taluk": " ",
  "Village": " ",
  "Blockno": " ",
  "Surveyno": " ",
  "Subdivno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "050507",
      "Plotinfo": {
        "Area_details": "Area : Hectare : 0, Are : 3, Square Metre:1",
        "Owner_details": "1 : ഏലിയാമ്മ, പത്രോസ്‌ ഭാര്യ -\\nകട്ടേത്ത്‌ പറമ്പില്‍ \\n2 : പത്രോസ്‌യോഹന്നാന്‍,null -\\nഇലഞ്ഞാടിയില്‍",
        "Remark": "Area : Hectare : 0, Are : 3, Square Metre:1"
      },
      "Plotno": "3"
    }
  }
]`}
          />
          <ApiSection
            title="Lakshadweep API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "lakshadweep",
  "District": " ",
  "Taluk": " ",
  "Village": " ",
  "Survey": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "01,05,015,30",
      "Plotinfo": "\\nPlot no:30/3\\nArea:26.80\\n-------\\n\\nLandName: Vadak Pandaram\\n\\nOwner : Abdul Rahmankoya haji \\nFamily Name: Pichiyath\\nFather's Name: Nil\\n\\nOwner : Muthubi \\nFamily Name: Nil\\nFather's Name: Koyakidavkoya Pichiyath\\n\\nOwner : Sarifommabi \\nFamily Name: Nil\\nFather's Name: KoyakidavKoyaPichiyath\\n\\nOwner : Ayshabi \\nFamily Name: Nil\\nFather's Name: KoyakidavkoyaPichiyath\\n",
      "Plotno": "30/3"
    }
  }
]`}
          />
          <ApiSection
            title="Uttar Pradesh API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "up",
  "District": " ",
  "Tehsil": " ",
  "Village": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "137,00730,117944",
      "Plotinfo": "खाता संख्या : 00039 खसरा संख्या:63 क्षेत्रफल(हे.) : 0.967 \\n\\nखातेदार का नाम :- 00039\\n1 :- नाम :रामचन्द्र संरक्षक का नाम: मुरली सिह निवास स्थान :जगतपुर",
      "Plotno": "29"
    }
  }
]`}
          />
          <ApiSection
            title="Bihar API"
            url="http://regtechapi.in/bhunaksha"
            method="POST"
            body={`{
  "state": "bihar",
  "District": " ",
  "Tehsil": " ",
  "Village": " ",
  "Plotno": " "
}`}
            successResponse={`[
  {
    "status_code": 200,
    "data": {
      "Giscode": "17,15,13,3,6",
      "Plotinfo": "खाता नंबर: 230\\nकिसान नाम: बबलू कुमार\\nकिसान का पता: गाँव के पश्चिमी छोर पर स्थित",
      "Plotno": "33"
    }
  }
]`}
          />
        </div>
      )}
    </div>
  );
};

export default BhunakshaApis;
