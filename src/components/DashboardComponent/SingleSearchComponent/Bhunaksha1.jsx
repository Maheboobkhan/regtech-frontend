
import React, { useState } from 'react';

const biharData = [
  {
    District: "Patna",
    Circle: "Patna",
    Halka: "Halka-1",
    Mauza: "Mauza-1",
    Subdiv: "Subdiv-1",
    Surveytype: "Type-1",
    Mapinstance: "Instance-1",
    Sheetno: "Sheet-1",
    Plotno: "Plot-1",
  },
  {
    District: "Patna",
    Circle: "Patna",
    Halka: "Halka-2",
    Mauza: "Mauza-2",
    Subdiv: "Subdiv-2",
    Surveytype: "Type-2",
    Mapinstance: "Instance-2",
    Sheetno: "Sheet-2",
    Plotno: "Plot-2",
  },
  {
    District: "Bhojpur",
    Circle: "Arrah",
    Halka: "Halka-1",
    Mauza: "Mauza-3",
    Subdiv: "Subdiv-1",
    Surveytype: "Type-3",
    Mapinstance: "Instance-3",
    Sheetno: "Sheet-3",
    Plotno: "Plot-3",
  },
  // Add more Bihar data as needed
];

const jharkhandData = [
  { District: "Gumla", Circle: "Gumla", Halka: "Halka-07", Mauza: "पुगु" },
  { District: "Gumla", Circle: "Gumla", Halka: "Halka-08", Mauza: "महुगांव" },
  { District: "Ranchi", Circle: "Ranchi", Halka: "Halka-01", Mauza: "मौजा-1" },
  { District: "Ranchi", Circle: "Ranchi", Halka: "Halka-02", Mauza: "मौजा-2" },
  // Add more Jharkhand data as needed
];

const goaData = [
  { District: "North Goa", Taluka: "Taluka-1", Village: "Village-1" },
  { District: "North Goa", Taluka: "Taluka-2", Village: "Village-2" },
  { District: "South Goa", Taluka: "Taluka-1", Village: "Village-3" },
  { District: "South Goa", Taluka: "Taluka-2", Village: "Village-4" },
  // Add more Goa data as needed
];

const Bhunaksha = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCircle, setSelectedCircle] = useState('');
  const [selectedHalka, setSelectedHalka] = useState('');
  const [selectedMauza, setSelectedMauza] = useState('');
  const [selectedSubdiv, setSelectedSubdiv] = useState('');
  const [selectedSurveytype, setSelectedSurveytype] = useState('');
  const [selectedMapinstance, setSelectedMapinstance] = useState('');
  const [selectedSheetno, setSelectedSheetno] = useState('');
  const [selectedPlotno, setSelectedPlotno] = useState('');

  const districts = selectedState === "bihar" 
    ? [...new Set(biharData.map(item => item.District))]
    : selectedState === "jharkhand"
    ? [...new Set(jharkhandData.map(item => item.District))]
    : selectedState === "goa"
    ? [...new Set(goaData.map(item => item.District))]
    : [];

  const circles = selectedState === "bihar" && selectedDistrict
    ? [...new Set(biharData.filter(item => item.District === selectedDistrict).map(item => item.Circle))]
    : selectedState === "jharkhand" && selectedDistrict
    ? [...new Set(jharkhandData.filter(item => item.District === selectedDistrict).map(item => item.Circle))]
    : [];

  const halkas = selectedState === "bihar" && selectedCircle
    ? [...new Set(biharData.filter(item => item.Circle === selectedCircle).map(item => item.Halka))]
    : selectedState === "jharkhand" && selectedCircle
    ? [...new Set(jharkhandData.filter(item => item.Circle === selectedCircle).map(item => item.Halka))]
    : [];

  const mauzas = selectedState === "bihar" && selectedHalka
    ? [...new Set(biharData.filter(item => item.Halka === selectedHalka).map(item => item.Mauza))]
    : selectedState === "jharkhand" && selectedCircle
    ? [...new Set(jharkhandData.filter(item => item.Circle === selectedCircle).map(item => item.Mauza))]
    : [];

  const subdivs = selectedState === "bihar" && selectedDistrict
    ? [...new Set(biharData.filter(item => item.District === selectedDistrict).map(item => item.Subdiv))]
    : [];

  const surveytypes = selectedState === "bihar" && selectedHalka
    ? [...new Set(biharData.filter(item => item.Halka === selectedHalka).map(item => item.Surveytype))]
    : [];

  const mapinstances = selectedState === "bihar" && selectedHalka
    ? [...new Set(biharData.filter(item => item.Halka === selectedHalka).map(item => item.Mapinstance))]
    : [];

  const sheetnos = selectedState === "bihar" && selectedHalka
    ? [...new Set(biharData.filter(item => item.Halka === selectedHalka).map(item => item.Sheetno))]
    : [];

  const plotnos = selectedState === "bihar" && selectedHalka
    ? [...new Set(biharData.filter(item => item.Halka === selectedHalka).map(item => item.Plotno))]
    : [];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
    setSelectedCircle('');
    setSelectedHalka('');
    setSelectedMauza('');
    setSelectedSubdiv('');
    setSelectedSurveytype('');
    setSelectedMapinstance('');
    setSelectedSheetno('');
    setSelectedPlotno('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedCircle('');
    setSelectedHalka('');
    setSelectedMauza('');
    setSelectedSubdiv('');
    setSelectedSurveytype('');
    setSelectedMapinstance('');
    setSelectedSheetno('');
    setSelectedPlotno('');
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
    setSelectedHalka('');
    setSelectedMauza('');
    setSelectedSubdiv('');
    setSelectedSurveytype('');
    setSelectedMapinstance('');
    setSelectedSheetno('');
    setSelectedPlotno('');
  };

  const handleHalkaChange = (e) => {
    setSelectedHalka(e.target.value);
    setSelectedMauza('');
    setSelectedSubdiv('');
    setSelectedSurveytype('');
    setSelectedMapinstance('');
    setSelectedSheetno('');
    setSelectedPlotno('');
  };

  const handleMauzaChange = (e) => {
    setSelectedMauza(e.target.value);
  };

  const handleSubdivChange = (e) => {
    setSelectedSubdiv(e.target.value);
  };

  const handleSurveytypeChange = (e) => {
    setSelectedSurveytype(e.target.value);
  };

  const handleMapinstanceChange = (e) => {
    setSelectedMapinstance(e.target.value);
  };

  const handleSheetnoChange = (e) => {
    setSelectedSheetno(e.target.value);
  };

  const handlePlotnoChange = (e) => {
    setSelectedPlotno(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSend;
    if (selectedState === "bihar") {
      dataToSend = {
        bhumi_type: "bhunaksha",
        State: selectedState,
        District: selectedDistrict,
        Subdiv: selectedSubdiv,
        Circle: selectedCircle,
        Halka: selectedHalka,
        Mauza: selectedMauza,
        Surveytype: selectedSurveytype,
        Mapinstance: selectedMapinstance,
        Sheetno: selectedSheetno,
        Plotno: selectedPlotno,
      };
    } else if (selectedState === "jharkhand") {
      dataToSend = {
        bhumi_type: "bhunaksha",
        State: selectedState,
        District: selectedDistrict,
        Circle: selectedCircle,
        Mauza: selectedMauza,
      };
    } else if (selectedState === "goa") {
      dataToSend = {
        bhumi_type: "bhunaksha",
        State: selectedState,
        District: selectedDistrict,
        Taluka: selectedCircle, // Assuming Circle represents Taluka here
        Village: selectedMauza,
      };
    }
    console.log("Data to send:", dataToSend);
  };

  return (
    <div className="mb-4 mt-8 flex flex-col items-center">
      <label htmlFor="state" className="block text-lg font-medium text-gray-700">Select State</label>
      <select
        id="state"
        name="state"
        className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="" className="text-gray-500">--Select State--</option>
        <option value="bihar">Bihar</option>
        <option value="jharkhand">Jharkhand</option>
        <option value="goa">Goa</option>
      </select>

      {selectedState && (
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-4">
          <div className="mb-6">
            <label htmlFor="district" className="block text-lg font-medium text-gray-700">Select District</label>
            <select
              id="district"
              name="district"
              className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="" className="text-gray-500">--Select District--</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          {selectedDistrict && (
            <div className="mb-6">
              <label htmlFor="circle" className="block text-lg font-medium text-gray-700">Select Circle</label>
              <select
                id="circle"
                name="circle"
                className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                value={selectedCircle}
                onChange={handleCircleChange}
              >
                <option value="" className="text-gray-500">--Select Circle--</option>
                {circles.map(circle => (
                  <option key={circle} value={circle}>{circle}</option>
                ))}
              </select>
            </div>
          )}

          {selectedCircle && (
            <div className="mb-6">
              <label htmlFor="halka" className="block text-lg font-medium text-gray-700">Select Halka</label>
              <select
                id="halka"
                name="halka"
                className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                value={selectedHalka}
                onChange={handleHalkaChange}
              >
                <option value="" className="text-gray-500">--Select Halka--</option>
                {halkas.map(halka => (
                  <option key={halka} value={halka}>{halka}</option>
                ))}
              </select>
            </div>
          )}

          {selectedHalka && selectedState === "bihar" && (
            <div className="mb-6">
              <label htmlFor="mauza" className="block text-lg font-medium text-gray-700">Select Mauza</label>
              <select
                id="mauza"
                name="mauza"
                className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                value={selectedMauza}
                onChange={handleMauzaChange}
              >
                <option value="" className="text-gray-500">--Select Mauza--</option>
                {mauzas.map(mauza => (
                  <option key={mauza} value={mauza}>{mauza}</option>
                ))}
              </select>
            </div>
          )}

          {selectedDistrict && selectedState === "bihar" && (
            <div className="mb-6">
              <label htmlFor="subdiv" className="block text-lg font-medium text-gray-700">Select Subdiv</label>
              <select
                id="subdiv"
                name="subdiv"
                className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                value={selectedSubdiv}
                onChange={handleSubdivChange}
              >
                <option value="" className="text-gray-500">--Select Subdiv--</option>
                {subdivs.map(subdiv => (
                  <option key={subdiv} value={subdiv}>{subdiv}</option>
                ))}
              </select>
            </div>
          )}

          {selectedHalka && selectedState === "bihar" && (
            <>
              <div className="mb-6">
                <label htmlFor="surveytype" className="block text-lg font-medium text-gray-700">Select Survey Type</label>
                <select
                  id="surveytype"
                  name="surveytype"
                  className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                  value={selectedSurveytype}
                  onChange={handleSurveytypeChange}
                >
                  <option value="" className="text-gray-500">--Select Survey Type--</option>
                  {surveytypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="mapinstance" className="block text-lg font-medium text-gray-700">Select Map Instance</label>
                <select
                  id="mapinstance"
                  name="mapinstance"
                  className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                  value={selectedMapinstance}
                  onChange={handleMapinstanceChange}
                >
                  <option value="" className="text-gray-500">--Select Map Instance--</option>
                  {mapinstances.map(instance => (
                    <option key={instance} value={instance}>{instance}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="sheetno" className="block text-lg font-medium text-gray-700">Select Sheet No</label>
                <select
                  id="sheetno"
                  name="sheetno"
                  className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                  value={selectedSheetno}
                  onChange={handleSheetnoChange}
                >
                  <option value="" className="text-gray-500">--Select Sheet No--</option>
                  {sheetnos.map(sheet => (
                    <option key={sheet} value={sheet}>{sheet}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="plotno" className="block text-lg font-medium text-gray-700">Select Plot No</label>
                <select
                  id="plotno"
                  name="plotno"
                  className="form-select cursor-pointer mt-1 block w-full border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
                  value={selectedPlotno}
                  onChange={handlePlotnoChange}
                >
                  <option value="" className="text-gray-500">--Select Plot No--</option>
                  {plotnos.map(plot => (
                    <option key={plot} value={plot}>{plot}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="mt-4 bg-[#00acc1] text-white rounded-lg py-2 px-4 hover:bg-[#0097a7] transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Bhunaksha;
