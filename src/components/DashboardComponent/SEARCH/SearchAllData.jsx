import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const SearchData = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [searchOption, setSearchOption] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [exporting, setExporting] = useState(false);

  // Function to fetch data with pagination
  const fetchData = async (page = 1) => {
    const domain = localStorage.getItem('domain');
    const token = Cookies.get('authToken');
    setLoading(true);
    try {
      const response = await axios.post(
        `${domain}/search_all`,
        {
          query: searchValue,
          token: token,
          page: page,
        }
      );
      console.log(response);

      // Parse pagination links from HTML response
      const paginationHtml = response.data.pagination;
      const doc = new DOMParser().parseFromString(paginationHtml, "text/html");
      const links = Array.from(
        doc.querySelectorAll(".page-item .page-link")
      ).map((link) => ({
        url: link.getAttribute("href"),
        text: link.innerText,
        isCurrent: link.closest(".page-item").classList.contains("active"),
      }));

      setData(response.data.results.data); // Data for the current page
      setPagination(response.data.pagination); // Pagination details (this could be directly used to get last_page, etc.)
      setPaginationLinks(links); // Set pagination links
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change for search field
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Handle form submission (search action)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData();
    // setSearchValue("");
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearchOption("");
    fetchData();
  };

  // Handle pagination click (load new data based on page)
  const handlePaginationClick = (page) => {
    if (page !== pagination.current_page) {
      fetchData(page); // Fetch data for the clicked page
    }
  };

  // Handle export (CSV functionality will be implemented here)
  const handleExport = async () => {
    const domain = localStorage.getItem('domain');
    // console.log(searchOption, searchValue);
    if (searchOption === "" || searchValue === "") {
      alert("Select export option and enter the input to Export");
      return;
    }
    setExporting(true);
    try {
      const response = await axios.post(
        `${domain}/export/data`,
        {
          [searchOption]: searchValue,
        }
      );
      // console.log(response);
      const records = response.data;
      const csvData = records.map((record) => [
        record.BCName,
        record.MobileNo,
        record.Pincode,
        record.State,
        record.District,
      ]);
      csvData.unshift(["Name", "Mobile No", "Pin code", "State", "District"]);

      const csvContent =
        "data:text/csv;charset=utf-8," +
        csvData.map((e) => e.join(",")).join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "export.csv");
      link.click();
    } catch (error) {
      console.error("Error exporting data:", error);
    } finally {
      setExporting(false);
    }
  };

  // Fetch data initially when the component mounts
  useEffect(() => {
    fetchData(); // Fetch first page data
  }, []); // Run only once on initial render

  return (
    <div className="container mx-auto p-4 ml-2">
      <div className="dashboard mb-4">
        <div className="flex justify-between mb-4">
          <div className="w-1/4">
            <select
              value={searchOption}
              onChange={(e) => setSearchOption(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Search/Export Option</option>
              <option value="mobile_number">Mobile Number</option>
              <option value="state">State</option>
              <option value="district">District</option>
              <option value="name">Name</option>
              <option value="pincode">Pin Code</option>
            </select>
          </div>

          {searchOption && (
            <div className="w-1/2 flex">
              <div className="w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={`Search by ${searchOption}`}
                />
              </div>

              <button
                onClick={handleSearchSubmit}
                className="h-fit py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded ml-2"
                disabled={searchValue === ""}
              >
                Search
              </button>

              <button
                onClick={handleClearFilter}
                className="h-fit w-1/2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded ml-2"
              >
                Clear Filter
              </button>
            </div>
          )}

          {searchOption === '' ? <button
            onClick={handleExport}
            className="py-2 px-4 bg-[#00acc1] hover:bg-blue-400 text-white rounded ml-2"
            // disabled={searchValue==='' || searchOption===''}
          >
            Export
          </button> : <button
            onClick={handleExport}
            className="h-fit py-2 px-4 bg-[#00acc1] hover:bg-blue-400 text-white rounded ml-2"
            // disabled={searchValue==='' || searchOption===''}
          >
            Export
          </button>}
        </div>
      </div>

      {/* Data Table */}
      {loading || exporting ? (
        <div className="text-center">{exporting ? "Data Exporting Please Wait..." : "Table Data Loading..."}</div>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr style={{ backgroundColor: "#00acc1" }}>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Mobile No</th>
              <th className="border border-gray-300 p-2">Pin Code</th>
              <th className="border border-gray-300 p-2">State</th>
              <th className="border border-gray-300 p-2">District</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 !== 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-300 p-2">{item.BCName}</td>
                <td className="border border-gray-300 p-2">{item.MobileNo}</td>
                <td className="border border-gray-300 p-2">{item.Pincode}</td>
                <td className="border border-gray-300 p-2">{item.State}</td>
                <td className="border border-gray-300 p-2">{item.District}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {paginationLinks.length > 0 && (
          <div className="flex justify-center space-x-2">
            {/* Render the pagination links dynamically */}
            {paginationLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(parseInt(link.text))}
                className={`p-2 rounded ${
                  link.isCurrent ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                dangerouslySetInnerHTML={{ __html: link.text }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchData;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from 'js-cookie';

// const SearchData = () => {
//   const [data, setData] = useState([]);
//   const [pagination, setPagination] = useState({});
//   const [searchOption, setSearchOption] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paginationLinks, setPaginationLinks] = useState([]);
//   const [exporting, setExporting] = useState(false);

//   // Function to fetch data with pagination
//   const fetchData = async (page = 1, searchOption = '', searchValue = '') => {
//     const domain = localStorage.getItem('domain');
//     const token = Cookies.get('authToken');
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${domain}/search_all`,
//         {
//           query: searchValue,  // send empty search value
//           token: token,
//           page: page,
//         }
//       );
//       console.log(response);

//       // Parse pagination links from HTML response
//       const paginationHtml = response.data.pagination;
//       const doc = new DOMParser().parseFromString(paginationHtml, "text/html");
//       const links = Array.from(
//         doc.querySelectorAll(".page-item .page-link")
//       ).map((link) => ({
//         url: link.getAttribute("href"),
//         text: link.innerText,
//         isCurrent: link.closest(".page-item").classList.contains("active"),
//       }));

//       setData(response.data.results.data); // Data for the current page
//       setPagination(response.data.pagination); // Pagination details (this could be directly used to get last_page, etc.)
//       setPaginationLinks(links); // Set pagination links
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle input change for search field
//   const handleInputChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   // Handle form submission (search action)
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     fetchData(1, searchOption, searchValue);  // Use searchOption and searchValue
//   };

//   // Clear filters and fetch fresh data
//   const handleClearFilter = (e) => {
//     e.preventDefault();
//     // Clear both searchOption and searchValue immediately
//     setSearchOption("");  
//     setSearchValue("");

//     // Fetch fresh data with no filters (empty values)
//     fetchData(1, '', ''); // Clear filters and fetch with no search
//   };

//   // Handle pagination click (load new data based on page)
//   const handlePaginationClick = (page) => {
//     if (page !== pagination.current_page) {
//       fetchData(page, searchOption, searchValue); // Fetch data for the clicked page
//     }
//   };

//   // Handle export (CSV functionality will be implemented here)
//   const handleExport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (searchOption === "" || searchValue === "") {
//       alert("Select Option to Export");
//       return;
//     }
//     setExporting(true);
//     try {
//       const response = await axios.post(
//         `${domain}/export/data`,
//         {
//           [searchOption]: searchValue,
//         }
//       );
//       const records = response.data;
//       const csvData = records.map((record) => [
//         record.BCName,
//         record.MobileNo,
//         record.Pincode,
//         record.State,
//         record.District,
//       ]);
//       csvData.unshift(["Name", "Mobile No", "Pin code", "State", "District"]);

//       const csvContent =
//         "data:text/csv;charset=utf-8," +
//         csvData.map((e) => e.join(",")).join("\n");

//       const encodedUri = encodeURI(csvContent);
//       const link = document.createElement("a");
//       link.setAttribute("href", encodedUri);
//       link.setAttribute("download", "export.csv");
//       link.click();
//     } catch (error) {
//       console.error("Error exporting data:", error);
//     } finally {
//       setExporting(false);
//     }
//   };

//   // Fetch data initially when the component mounts
//   useEffect(() => {
//     fetchData(1, '', ''); // Fetch first page data with empty search
//   }, []); // Run only once on initial render

//   return (
//     <div className="container mx-auto p-4 ml-2">
//       <div className="dashboard mb-4">
//         <div className="flex justify-between mb-4">
//           <div className="w-1/4">
//             <select
//               value={searchOption}
//               onChange={(e) => setSearchOption(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="">Select Search/Export Option</option>
//               <option value="mobile_number">Mobile Number</option>
//               <option value="state">State</option>
//               <option value="district">District</option>
//               <option value="name">Name</option>
//               <option value="pincode">Pin Code</option>
//             </select>
//           </div>

//           {searchOption && (
//             <div className="w-1/2 flex">
//               <div className="w-full">
//                 <input
//                   type="text"
//                   value={searchValue}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder={`Search by ${searchOption}`}
//                 />
//               </div>

//               <button
//                 onClick={handleSearchSubmit}
//                 className="h-fit py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded ml-2"
//                 disabled={searchValue === ""}
//               >
//                 Search
//               </button>

//               <button
//                 onClick={handleClearFilter}
//                 className="h-fit w-1/2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded ml-2"
//               >
//                 Clear Filter
//               </button>
//             </div>
//           )}

//           <button
//             onClick={handleExport}
//             className="py-2 px-4 bg-[#00acc1] hover:bg-blue-400 text-white rounded ml-2"
//           >
//             Export
//           </button>
//         </div>
//       </div>

//       {/* Data Table */}
//       {loading || exporting ? (
//         <div className="text-center">
//           {exporting ? "Data Exporting Please Wait..." : "Table Data Loading..."}
//         </div>
//       ) : (
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr style={{ backgroundColor: "#00acc1" }}>
//               <th className="border border-gray-300 p-2">Name</th>
//               <th className="border border-gray-300 p-2">Mobile No</th>
//               <th className="border border-gray-300 p-2">Pin Code</th>
//               <th className="border border-gray-300 p-2">State</th>
//               <th className="border border-gray-300 p-2">District</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className={index % 2 !== 0 ? "bg-gray-100" : ""}>
//                 <td className="border border-gray-300 p-2">{item.BCName}</td>
//                 <td className="border border-gray-300 p-2">{item.MobileNo}</td>
//                 <td className="border border-gray-300 p-2">{item.Pincode}</td>
//                 <td className="border border-gray-300 p-2">{item.State}</td>
//                 <td className="border border-gray-300 p-2">{item.District}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Pagination */}
//       <div className="mt-4 flex justify-center">
//         {paginationLinks.length > 0 && (
//           paginationLinks.map((link, index) => (
//             <button 
//               key={index} 
//               onClick={() => handlePaginationClick(link.page)} 
//               className={`px-4 py-2 ${link.isCurrent ? "bg-blue-500" : "bg-gray-200"} hover:bg-blue-300`}
//             >
//               {link.text}
//             </button>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchData;