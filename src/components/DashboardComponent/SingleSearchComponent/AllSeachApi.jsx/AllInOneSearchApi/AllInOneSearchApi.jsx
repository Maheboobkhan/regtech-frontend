// import React, { Component } from "react";
// import AadhaarAPI from "./AllApiComponent/AadharApi";

// class AllApi extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//       };
//     }

//     render(){
//         return (
//             <div className="mt-12">
//                 <h1>Api</h1>
//                 <AadhaarAPI />
//             </div>
//         )
//     }
// }

// export default AllApi;
import React from "react";
import RcVerfication from "../IndividualApi/RcVerification";


const AllInOneApi = () => {
    return (
        <div className="mt-12 pl-4 font-montserrat">
            <RcVerfication />
        </div>
    );
};

export default AllInOneApi;
