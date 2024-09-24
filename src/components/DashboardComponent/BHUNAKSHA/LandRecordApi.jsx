import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class LandRecordAPIs extends Component {
  state = {
    expandedSection: null,
    showLandRecordApis: false, // State to control the expansion of the Land Record APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleLandRecordApis = () => {
    this.setState({
      showLandRecordApis: !this.state.showLandRecordApis,
    });
  };

  render() {
    const { expandedSection, showLandRecordApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Land Record API */}
          <div
            className={`bg-gray-200 rounded cursor-pointer transition-all duration-300 ${
              showLandRecordApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-400 text-white w-full ${
                showLandRecordApis ? "bg-blue-600" : ""
              }`}
              onClick={this.toggleLandRecordApis}
            >
              Land Record APIs
            </h3>

            {showLandRecordApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Land Record */}
                <div
                  className="bg-blue-400 p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("landRecord")}
                >
                  <h4 className="font-semibold underline">Land Record</h4>
                </div>
                {expandedSection === "landRecord" && (
                  <div className="p-4 border border-gray-500 rounded bg-gray-100">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/land
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-200 p-2 rounded">
                      {`{
  "Url": "https://bhunaksha.cg.nic.in/",
  "OP": 4,
  "GstStateCode": 22,
  "Levels": "55,01,01,058",
  "X_Coordinate": -1985.1836332116745,
  "Y_Coordinate": 3625.746517505414
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-200 p-2 rounded">
                      {`{
  "data": {
    "ID": "j0V_En5ASJKhg-rScbanMA",
    "PNIU": "null",
    "attrs": "null",
    "gisCode": 550101.058,
    "has_data": "Y",
    "info": "धारणाधिकार : शासकीय भूमि\\nक्षेत्रफल : 97.6810 हेक्टेयर\\nक्षेत्रफल(वर्ग फुट) : 10514295.0000\\nसिंचित क्षेत्रफल : 0.0000\\nअसिंचित क्षेत्रफल : 97.6810\\n\\nखसरा नंबर  : 3/1/क/1\\n नाम  :छ .ग. शासन (राजस्व विभाग)\\nपिता का नाम   : null\\n पता  : \\n\\nशामिल खसरा : 3/1/द/2(0.0000 हेकॿटेयर), 3/1/द/3(0.0000 हेकॿटेयर), 3/1/द/3(0.0000 हेकॿटेयर),\\n",
    "pdf_base64": "+mscCzJkoqOlk+Vnpaeqd/hbWLgqqHiquO0frWxOrJ2fvd4v3lJ1QrRHJJXodim8mfeZh7st+1p9Cq2ubbETQTIUYjIToiFjwXECsRNE41aYVq0e3SAyYDMFsw7Pzs4/Lj8v7y9v728vny7PPs+v769vr2UXlPc5Nw0drQTmZLnK2ZwdK+HyocdoRyaXJl7P3k9v7ylaCM6fbc9Pzs+v729vryhI149Pvm+v7y+v7u9fzc5evP+P7i+v7q+v7m5ujc0dS93+LE+PnT/fym/v7i+vrg/v7m/v7q3NzK/v7u8/Pl/v7y/v72+vry/v76+vr29/W7/v3D/v3M/v3U9fTMxsWn/v3c8e2Rz8yV0c+t7uzJ9fTc+vnmw7xr2NF7/vi3s7CI3Nip7+u58+/D+vnq7u3gxsW6+vnu0Mh139aKv7qQ0s2kvLV9y8OI5N2r6OK29PPs+e6n7+Wn3NOb/fTC/vri59ubysKY/PTM3de46ePD/vrm1smU+vPW8+3S9+mz+OvF/PTc/vnq/vnu/vryU01C/fTj39zXs6+q/vr2qaGd083K/",
    "plotInfoLinks": "<strong>Reports</strong> :<br><a target=\"bhumap\" href=\"22/plotreportCG.jsp?state=22&giscode=550101.058&plotno=3/1/क/1\">खसरा नक्शा</a><br /><a target=\"bhumap\" href=\"https://revenue.cg.nic.in/bhuiyanuser/User/Selection_Report_For_KhasraDetail.aspx?villno=550101.058&khasrano=3/1/क/1\">खसरा  विवरण</a><br />",
    "xmin": "-2309.4335258031",
    "ymin": "3280.217235246",
    "xmax": "-1436.9552907749",
    "ymax": "4306.862607357",
    "plotNo": "3/1/क/1"
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
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandRecordAPIs;
