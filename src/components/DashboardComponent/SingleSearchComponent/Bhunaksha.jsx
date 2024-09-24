// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// const Bhunaksha = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedCircle, setSelectedCircle] = useState("");
//   const [selectedHalka, setSelectedHalka] = useState("");
//   const [selectedMauza, setSelectedMauza] = useState("");
//   const [selectedSheet, setSelectedSheet] = useState("");
//   const [selectedPlot, setSelectedPlot] = useState("");

//   const [jharkhandData, setjharkhandData] = useState([]);

//   useEffect(() => {
//     fetchJharkhandData();
//   }, []);

//   const handleSubmit = async (e) => {
//     const token = Cookies.get("authToken");
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://regtechapi.in/api/seachv4",
//         {
//           bhumi_type: "bhunaksha",
//           State: selectedState,
//           District: selectedDistrict,
//           Circle: selectedCircle,
//           Halka: selectedHalka,
//           Mauza: selectedMauza,
//           Sheetno: selectedSheet,
//           Plotno: selectedPlot,
//         },
//         {
//           headers: {
//             AccessToken: token, // Your actual token
//             "Content-Type": "application/json", // Optional: set the content type
//           },
//         }
//       );

//       console.log('jhar: ',response); // Handle the response
//     } catch (error) {
//       console.error("Error during the API call:", error);
//     }
//   };

//   const handleStateChange = (e) => {
//     console.log(e.target.value);
//     setSelectedState(e.target.value);
//   };

//   const handleDistrictChange = (e) => {
//     setSelectedDistrict(e.target.value);
//   };

//   const handleCircleChange = (e) => {
//     setSelectedCircle(e.target.value);
//   };

//   const handleHalkaChange = (e) => {
//     setSelectedHalka(e.target.value);
//   };

//   const handleMauzaChange = (e) => {
//     setSelectedMauza(e.target.value);
//   };

//   const handleSheetChange = (e) => {
//     setSelectedSheet(e.target.value);
//   };

//   const handlePlotChange = (e) => {
//     setSelectedPlot(e.target.value);
//   };

//   const fetchJharkhandData = async () => {
//     const response = await axios.get("http://localhost:8000/api/jharkhandData");
//     console.log(response);

//     setjharkhandData(response.data);
//   };
//   const jharkhandDistricts = [
//     ...new Set(jharkhandData.map((item) => item.District)),
//   ];

//   const Circles = [
//     ...new Set(
//       jharkhandData
//         .filter((item) => item.District === selectedDistrict)
//         .map((item) => item.Circle)
//     ),
//   ];

//   const Halkas = [
//     ...new Set(
//       jharkhandData
//         .filter((item) => item.Circle === selectedCircle)
//         .map((item) => item.Halka)
//     ),
//   ];

//   const Mauzas = [
//     ...new Set(
//       jharkhandData
//         .filter((item) => item.Halka === selectedHalka)
//         .map((item) => item.Mauza)
//     ),
//   ];

//   const Sheets = [
//     ...new Set(
//       jharkhandData
//         .filter((item) => item.Mauza === selectedMauza)
//         .map((item) => item.Sheet)
//     ),
//   ];

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label
//           htmlFor="state"
//           className="block text-lg font-medium text-gray-700"
//         >
//           Select State
//         </label>
//         <select
//           id="state"
//           name="state"
//           className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//           value={selectedState}
//           onChange={handleStateChange}
//         >
//           <option value="" className="text-gray-500">
//             --Select State--
//           </option>
//           <option value="bihar">Bihar</option>
//           <option value="jharkhand">Jharkhand</option>
//           <option value="goa">Goa</option>
//         </select>

//         {/* jharkhand */}
//         {selectedState === "jharkhand" && (
//           <>
//             <select
//               onChange={handleDistrictChange}
//               className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//             >
//               <option>Select District</option>
//               {jharkhandDistricts.map((district) => {
//                 return (
//                   <option key={district} value={district}>
//                     {district}
//                   </option>
//                 );
//               })}
//             </select>

//             <select
//               onChange={handleCircleChange}
//               className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//             >
//               <option>Select Circle</option>
//               {Circles.map((circle) => {
//                 return (
//                   <option key={circle} value={circle}>
//                     {circle}
//                   </option>
//                 );
//               })}
//             </select>

//             <select
//               onChange={handleHalkaChange}
//               className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//             >
//               <option>Select Halka</option>
//               {Halkas.map((halka) => {
//                 return (
//                   <option key={halka} value={halka}>
//                     {halka}
//                   </option>
//                 );
//               })}
//             </select>

//             <select
//               onChange={handleMauzaChange}
//               className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//             >
//               <option>Select Mauza</option>
//               {Mauzas.map((mauza) => {
//                 return (
//                   <option key={mauza} value={mauza}>
//                     {mauza}
//                   </option>
//                 );
//               })}
//             </select>

//             <select
//               onChange={handleSheetChange}
//               className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//             >
//               <option>Select Sheet Number</option>
//               {Sheets.map((sheet) => {
//                 return (
//                   <option key={sheet} value={sheet}>
//                     {sheet}
//                   </option>
//                 );
//               })}
//             </select>
//             <label
//               htmlFor="plot"
//               className="block mt-2 text-lg font-medium text-gray-700"
//             >
//               Enter Plot Number
//             </label>
//             <input
//               id="plot"
//               name="plot"
//               className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//               type="text"
//               onChange={handlePlotChange}
//               placeholder="Enter Plot Number"
//             />
//             <input
//               className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//               type="submit"
//             />
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Bhunaksha;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Bhunaksha = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");
  const [selectedHalka, setSelectedHalka] = useState("");
  const [selectedMauza, setSelectedMauza] = useState("");
  const [selectedSheet, setSelectedSheet] = useState("");
  const [selectedPlot, setSelectedPlot] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedVilage, setSelectedVillage] = useState("");
  const [selectedRi, setSelectedRi] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [selectedBlockno, setSelectedBlockno] = useState("");
  const [selectedSubdivno, setSelectedSubdivno] = useState("");

  const [jharkhandData, setjharkhandData] = useState([]);
  const [rajasthanData, setRajasthanData] = useState([]);
  const [lakshadweepData, setLakshadweepData] = useState([]);
  const [biharData, setBiharData] = useState([]);
  const [chhattisgarhData, setChhattisgarhData] = useState([]);
  const [keralaData, setKeralaData] = useState([]);
  const [goaData, setGoaData] = useState([]);
  const [odishaData, setOdishaData] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [responseData, setResponseData] = useState(null); // State to store response data

  useEffect(() => {
    fetchJharkhandData();
    fetchBiharData();
    fetchChhattisgarhData();
    fetchRajasthanData();
    fetchLakshadweepData();
    fetchKeralaData();
    fetchGoaData();
    fetchOdishaData();
  }, []);

  const handleSubmit = async (e) => {
    const token = Cookies.get("authToken");
    e.preventDefault();
    setLoading(true); // Set loading to true before fetching data

    const requestData = {
      bhumi_type: "bhunaksha",
      State: selectedState,
      District: selectedDistrict,
      Circle: selectedCircle,
      Halka: selectedHalka,
      Mauza: selectedMauza,
      Sheetno: selectedSheet,
      Plotno: selectedPlot,
      Tehsil: selectedTehsil,
      Village: selectedVilage,
      Ri: selectedRi,
      Taluka: selectedTaluka,
      Surveyno: selectedSurvey,
      Blockno: selectedBlockno,
      Subdivno: selectedSubdivno,
    };

    console.log("Request Data:", requestData); // Log the request data

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        {
          bhumi_type: "bhunaksha",
          State: selectedState,
          District: selectedDistrict,
          Circle: selectedCircle,
          Halka: selectedHalka,
          Mauza: selectedMauza,
          Sheetno: selectedSheet,
          Plotno: selectedPlot,
          Tehsil: selectedTehsil,
          Village: selectedVilage,
          Ri: selectedRi,
          Taluka: selectedTaluka,
          Blockno: selectedBlockno,
          Subdivno: selectedSubdivno,
          Surveyno: selectedSurvey,
        },
        {
          headers: { AccessToken: token },
        }
      );

      console.log("jhar: ", response);
      setResponseData(response.data); // Store response data
    } catch (error) {
      console.error("Error during the API call:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleBlocknoChange = (e) => {
    setSelectedBlockno(e.target.value);
  };

  const handleSubdivnoChange = (e) => {
    setSelectedSubdivno(e.target.value);
  };

  const handleSurveyChange = (e) => {
    setSelectedSurvey(e.target.value);
  };

  const handleTalukChange = (e) => {
    setSelectedTaluka(e.target.value);
  };

  const handleTehsilChange = (e) => {
    setSelectedTehsil(e.target.value);
  };

  const handleRiChange = (e) => {
    setSelectedRi(e.target.value);
  };

  const handleVillageChange = (e) => {
    setSelectedVillage(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
  };

  const handleHalkaChange = (e) => {
    setSelectedHalka(e.target.value);
  };

  const handleMauzaChange = (e) => {
    setSelectedMauza(e.target.value);
  };

  const handleSheetChange = (e) => {
    setSelectedSheet(e.target.value);
  };

  const handlePlotChange = (e) => {
    setSelectedPlot(e.target.value);
  };

  // biharData
  const fetchBiharData = async () => {
    const response = await axios.get("http://localhost:8000/api/biharData");
    setBiharData(response.data);
  };

  const fetchLakshadweepData = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/lakshadweepData"
    );
    setLakshadweepData(response.data);
  };

  // jharkhandData
  const fetchJharkhandData = async () => {
    const response = await axios.get("http://localhost:8000/api/jharkhandData");
    setjharkhandData(response.data);
  };

  // chhattisgarh
  const fetchChhattisgarhData = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/chhattisgarhData"
    );
    setChhattisgarhData(response.data);
  };

  const fetchRajasthanData = async () => {
    const response = await axios.get("http://localhost:8000/api/rajasthanData");
    setRajasthanData(response.data);
  };

  const fetchKeralaData = async () => {
    const response = await axios.get("http://localhost:8000/api/keralaData");
    setKeralaData(response.data);
  };

  const fetchGoaData = async () => {
    const response = await axios.get("http://localhost:8000/api/goaData");
    setGoaData(response.data);
  };

  const fetchOdishaData = async () => {
    const response = await axios.get("http://localhost:8000/api/odishaData");
    setOdishaData(response.data);
  };

  const jharkhandDistricts = [
    ...new Set(jharkhandData.map((item) => item.District)),
  ];

  const biharDistricts = [...new Set(biharData.map((item) => item.District))];

  const chhattisgarhDistricts = [
    ...new Set(chhattisgarhData.map((item) => item.District)),
  ];

  const rajasthanDistricts = [
    ...new Set(rajasthanData.map((item) => item.District)),
  ];

  const lakshadweepDistricts = [
    ...new Set(lakshadweepData.map((item) => item.District)),
  ];

  const keralaDistricts = [...new Set(keralaData.map((item) => item.District))];

  const goaDistricts = [...new Set(goaData.map((item) => item.District))];

  const odishaDistricts = [...new Set(odishaData.map((item) => item.District))];

  let Tehsils;
  let RiCircles;
  let Halkas;
  let Villages;
  let Sheets;
  let Talukas;
  let Survey;

  if (selectedState === "lakshadweep") {
    Talukas = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluk)
      ),
    ];
  } else if (selectedState === "goa") {
    Talukas = [
      ...new Set(
        goaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluka)
      ),
    ];
  } else if (selectedState === "kerala") {
    Talukas = [
      ...new Set(
        keralaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluk)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    Tehsils = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Tehsils = [
      ...new Set(
        rajasthanData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  }
  else if (selectedState === "odisha") {
    Tehsils = [
      ...new Set(
        odishaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    RiCircles = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    RiCircles = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  }
  else if (selectedState === "odisha") {
    RiCircles = [
      ...new Set(
        odishaData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    Villages = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Villages = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Halkas === selectedHalka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "lakshadweep") {
    Villages = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "kerala") {
    Villages = [
      ...new Set(
        keralaData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "goa") {
    Villages = [
      ...new Set(
        goaData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  }
  else if (selectedState === "odisha") {
    Villages = [
      ...new Set(
        odishaData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Village)
      ),
    ];
  }

  const Blocknos = [
    ...new Set(
      keralaData
        .filter((item) => item.Village === selectedVilage)
        .map((item) => item.Blockno)
    ),
  ];

  const Subdivnos = [
    ...new Set(
      keralaData
        .filter((item) => item.Surveyno === selectedSurvey)
        .map((item) => item.Blockno)
    ),
  ];

  if (selectedState === "lakshadweep") {
    Survey = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Surveyno)
      ),
    ];
  } else if (selectedState === "kerala") {
    Survey = [
      ...new Set(
        keralaData
          .filter((item) => item.Blockno === selectedBlockno)
          .map((item) => item.Survey)
      ),
    ];
  }

  const Circles = [
    ...new Set(
      jharkhandData
        .filter((item) => item.District === selectedDistrict)
        .map((item) => item.Circle)
    ),
  ];

  if (selectedState === "jharkhand") {
    Halkas = [
      ...new Set(
        jharkhandData
          .filter((item) => item.Circle === selectedCircle)
          .map((item) => item.Halka)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Halkas = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Halkas)
      ),
    ];
  }

  const Mauzas = [
    ...new Set(
      jharkhandData
        .filter((item) => item.Halka === selectedHalka)
        .map((item) => item.Mauza)
    ),
  ];

  if (selectedState === "jharkhand") {
    Sheets = [
      ...new Set(
        jharkhandData
          .filter((item) => item.Mauza === selectedMauza)
          .map((item) => item.Sheet)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Sheets = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  } else if (selectedState === "goa") {
    Sheets = [
      ...new Set(
        goaData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  }
  else if (selectedState === "odisha") {
    Sheets = [
      ...new Set(
        odishaData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label
          htmlFor="state"
          className="block text-lg font-medium text-gray-700"
        >
          Select State
        </label>
        <select
          id="state"
          name="state"
          className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="" className="text-gray-500">
            --Select State--
          </option>
          <option value="bihar">Bihar</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="up">Uttar Pradesh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="odisha">Odisha</option>
        </select>

        {/* bihar */}
        {selectedState === "bihar" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {biharDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleCircleChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Circle</option>
              {Circles.map((circle) => (
                <option key={circle} value={circle}>
                  {circle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleMauzaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Mauza</option>
              {Mauzas.map((mauza) => (
                <option key={mauza} value={mauza}>
                  {mauza}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* jharkhand */}
        {selectedState === "jharkhand" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {jharkhandDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleCircleChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Circle</option>
              {Circles.map((circle) => (
                <option key={circle} value={circle}>
                  {circle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleMauzaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Mauza</option>
              {Mauzas.map((mauza) => (
                <option key={mauza} value={mauza}>
                  {mauza}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* chhattisgarh */}
        {selectedState === "chhattisgarh" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {chhattisgarhDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((RiCircle) => (
                <option key={RiCircle} value={RiCircle}>
                  {RiCircle}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* rajasthan */}
        {selectedState === "rajasthan" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {rajasthanDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((RiCircle) => (
                <option key={RiCircle} value={RiCircle}>
                  {RiCircle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* lakshadweep */}
        {selectedState === "lakshadweep" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {lakshadweepDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSurveyChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Survey</option>
              {Survey.map((survey) => (
                <option key={survey} value={survey}>
                  {survey}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* kerala */}
        {selectedState === "kerala" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {keralaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleBlocknoChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Block Number</option>
              {Blocknos.map((block) => (
                <option key={block} value={block}>
                  {block}
                </option>
              ))}
            </select>

            <select
              onChange={handleSurveyChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Survey Number</option>
              {Survey.map((survey) => (
                <option key={survey} value={survey}>
                  {survey}
                </option>
              ))}
            </select>

            <select
              onChange={handleSubdivnoChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sub Division Number</option>
              {Subdivnos.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* goa */}
        {selectedState === "goa" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {goaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}


        {/* odisha */}
        {selectedState === "odisha" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {odishaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((Ri) => (
                <option key={Ri} value={Ri}>
                  {Ri}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}
      </form>

      {loading && <div className="mt-4 text-center">Data is fetching...</div>}

      {responseData && responseData.status_code === 200 && (
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <div className="card card-success">
              <div className="card-header">
                <h3 className="card-title">Bhumi Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <p>
                        <strong>Giscode:</strong>{" "}
                        {responseData.data.Giscode || "null"}
                      </p>
                      <p>
                        <strong>Plotno:</strong>{" "}
                        {responseData.data.Plotno || "null"}
                      </p>
                      {responseData.data.Plotinfo && (
                        <>
                          <p className="text-center">
                            <strong>Plot Description</strong>
                          </p>
                          <p>
                            <strong>Area Details:</strong>{" "}
                            {responseData.data.Plotinfo.Area_details || "null"}
                          </p>
                          <p>
                            <strong>Owner Details:</strong>{" "}
                            {responseData.data.Plotinfo.Owner_details || "null"}
                          </p>
                          <p>
                            <strong>Remark:</strong>{" "}
                            {responseData.data.Plotinfo.Remark || "null"}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {responseData && responseData.status_code === 500 && (
        <div className="text-white bg-red-500 p-4 mt-2 rounded">
          {responseData.message}
        </div>
      )}
    </div>
  );
};

export default Bhunaksha;
