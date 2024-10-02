// // ReportPDF.js
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     margin: 'auto',
//     border: '1pt solid black',
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCol: {
//     width: '20%',
//     border: '1pt solid black',
//     padding: 5,
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     textAlign: 'center',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     fontWeight: 'bold',
//   },
// });

// const ReportPDF = ({ reports, user, transactionTotal }) => (
//   <Document>
//     <Page style={styles.page}>
//       <View>
//         <Text style={{ fontSize: 18, marginBottom: 20 }}>Bill Report</Text>
//         <Text>Name: {user ? user.name : 'N/A'}</Text>
//         <Text>Email: {user ? user.email : 'N/A'}</Text>
//       </View>
//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Sr</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Service</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Price</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Hit Count</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Total</Text>
//         </View>
//         {reports.map((value, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCol}>{index + 1}</Text>
//             <Text style={styles.tableCol}>{value.api_name}</Text>
//             <Text style={styles.tableCol}>{value.scheme_price}</Text>
//             <Text style={styles.tableCol}>{value.hit_count}</Text>
//             <Text style={styles.tableCol}>
//               {user.scheme_type === "demo" ? "0" : value.total}
//             </Text>
//           </View>
//         ))}
//         <View style={[styles.tableRow, styles.totalRow]}>
//           <Text style={styles.tableCol}>Total Transaction</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}>{transactionTotal}</Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

// export default ReportPDF;




// ReportPDF.js
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     margin: 'auto',
//     border: '1pt solid black',
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCol: {
//     width: '20%',
//     border: '1pt solid black',
//     padding: 5,
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     textAlign: 'center',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     fontWeight: 'bold',
//   },
// });

// const ReportPDF = ({ reports, user, transactionTotal }) => (
//   <PDFViewer style={{ width: '100%', height: '500px' }}>
//     <Document>
//       <Page style={styles.page}>
//         <View>
//           <Text style={{ fontSize: 18, marginBottom: 20 }}>Bill Report</Text>
//           <Text>Name: {user ? user.name : 'N/A'}</Text>
//           <Text>Email: {user ? user.email : 'N/A'}</Text>
//         </View>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCol, styles.tableHeader]}>Sr</Text>
//             <Text style={[styles.tableCol, styles.tableHeader]}>Service</Text>
//             <Text style={[styles.tableCol, styles.tableHeader]}>Price</Text>
//             <Text style={[styles.tableCol, styles.tableHeader]}>Hit Count</Text>
//             <Text style={[styles.tableCol, styles.tableHeader]}>Total</Text>
//           </View>
//           {reports.map((value, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCol}>{index + 1}</Text>
//               <Text style={styles.tableCol}>{value.api_name}</Text>
//               <Text style={styles.tableCol}>{value.scheme_price}</Text>
//               <Text style={styles.tableCol}>{value.hit_count}</Text>
//               <Text style={styles.tableCol}>
//                 {user.scheme_type === "demo" ? "0" : value.total}
//               </Text>
//             </View>
//           ))}
//           <View style={[styles.tableRow, styles.totalRow]}>
//             <Text style={styles.tableCol}>Total Transaction</Text>
//             <Text style={styles.tableCol}></Text>
//             <Text style={styles.tableCol}></Text>
//             <Text style={styles.tableCol}></Text>
//             <Text style={styles.tableCol}>{transactionTotal}</Text>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   </PDFViewer>
// );

// export default ReportPDF;



// ReportPDF.js
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     margin: 'auto',
//     border: '1pt solid black',
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCol: {
//     width: '20%',
//     border: '1pt solid black',
//     padding: 5,
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     textAlign: 'center',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     fontWeight: 'bold',
//   },
// });

// const ReportPDF = ({ reports, user, transactionTotal }) => (
//   <Document>
//     <Page style={styles.page}>
//       <View>
//         <Text style={{ fontSize: 18, marginBottom: 20 }}>Bill Report</Text>
//         <Text>Name: {user ? user.name : 'N/A'}</Text>
//         <Text>Email: {user ? user.email : 'N/A'}</Text>
//       </View>
//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Sr</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Service</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Price</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Hit Count</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Total</Text>
//         </View>
//         {reports.map((value, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCol}>{index + 1}</Text>
//             <Text style={styles.tableCol}>{value.api_name}</Text>
//             <Text style={styles.tableCol}>{value.scheme_price}</Text>
//             <Text style={styles.tableCol}>{value.hit_count}</Text>
//             <Text style={styles.tableCol}>
//               {user.scheme_type === "demo" ? "0" : value.total}
//             </Text>
//           </View>
//         ))}
//         <View style={[styles.tableRow, styles.totalRow]}>
//           <Text style={styles.tableCol}>Total Transaction</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}>{transactionTotal}</Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

// export default ReportPDF;













// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const ReportPDF = ({ reports, user, transactionTotal }) => {
//   return (
//     <div className="container mx-auto p-6">
//       {/* Header Section */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center">
//           <img src="" alt="DocBoyz Logo" className="h-auto w-48" />
//           <h1 className="text-2xl font-bold ml-4">DocBoyz</h1>
//         </div>
//         <div className="text-right">
//           <p><strong>Zapfin Tekhnologies Pvt. Ltd.</strong></p>
//           <p>Aditya Business Center S N 1 A B Wing</p>
//           <p>3rd Floor Above ICICI Bank Kondhwa</p>
//           <p>Pune- 411048.</p>
//           <a href="http://www.docboyz.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.docboyz.in</a>
//         </div>
//       </div>

//       {/* Title Section */}
//       <h2 className="text-xl font-semibold mb-4">Bill Report</h2>
//       <p>Name: {user ? user.name : 'N/A'}</p>
//       <p>Email: {user ? user.email : 'N/A'}</p>

//       {/* Reports Table */}
//       <div className="bg-white border border-gray-300 rounded-lg shadow-lg mb-6">
//         <div className="bg-teal-500 text-white p-4 rounded-t-lg">
//           <h3 className="font-bold text-lg">Reports</h3>
//         </div>
//         <div className="p-4">
//           <table className="min-w-full border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2 text-left">Sr</th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
//                 <th className="border border-gray-300 px-4 py-2 text-right">Price</th>
//                 <th className="border border-gray-300 px-4 py-2 text-center">Hit Count</th>
//                 <th className="border border-gray-300 px-4 py-2 text-right">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((value, index) => (
//                 <tr key={index}>
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{value.api_name}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-right">{value.scheme_price}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-center">{value.hit_count}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-right">
//                     {user.scheme_type === "demo" ? "0" : value.total}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* Total Transaction Row */}
//           <div className="flex justify-between font-bold mt-4">
//             <span>Total Transaction</span>
//             <span>{transactionTotal}</span>
//           </div>
//         </div>
//       </div>

      // {/* Footer Section */}
      // <div className="text-center text-gray-500 text-sm">
      //   <p>Zapfin Tekhnologies Pvt. Limited</p>
      //   <p>(DocBoyz)</p>
      // </div>
//     </div>
//   );
// };

// export default ReportPDF;








// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     position: 'relative',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     height: 'auto',
//     width: 120, // Adjust size as needed
//   },
//   headerInfo: {
//     textAlign: 'right',
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     margin: 'auto',
//     border: '1pt solid black',
//     marginBottom: 30, // Add margin to separate from footer
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCol: {
//     width: '20%',
//     border: '1pt solid black',
//     padding: 5,
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     textAlign: 'center',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     fontWeight: 'bold',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30, // Adjust as necessary
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: '#999',
//     fontSize: 10,
//   },
// });

// const ReportPDF = ({ reports, user, transactionTotal }) => (
//   <Document>
//     <Page style={styles.page}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <View style={styles.logoContainer}>
//           <img src="" alt="DocBoyz Logo" style={styles.logo} />
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
//         </View>
//         <View style={styles.headerInfo}>
//           <Text><strong>Zapfin Tekhnologies Pvt. Ltd.</strong></Text>
//           <Text>Aditya Business Center S N 1 A B Wing</Text>
//           <Text>3rd Floor Above ICICI Bank Kondhwa</Text>
//           <Text>Pune- 411048.</Text>
//           <Text style={{ color: '#00acc1', textDecoration: 'underline' }}>www.docboyz.in</Text>
//         </View>
//       </View>
      
//       {/* Report Section */}
//       <View>
//         <Text style={{ fontSize: 18, marginBottom: 20 }}>Bill Report</Text>
//         <Text>Name: {user ? user.name : 'N/A'}</Text>
//         <Text>Email: {user ? user.email : 'N/A'}</Text>
//       </View>
      
//       {/* Table Section */}
//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Sr</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Service</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Price</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Hit Count</Text>
//           <Text style={[styles.tableCol, styles.tableHeader]}>Total</Text>
//         </View>
//         {reports.map((value, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCol}>{index + 1}</Text>
//             <Text style={styles.tableCol}>{value.api_name}</Text>
//             <Text style={styles.tableCol}>{value.scheme_price}</Text>
//             <Text style={styles.tableCol}>{value.hit_count}</Text>
//             <Text style={styles.tableCol}>
//               {user.scheme_type === "demo" ? "0" : value.total}
//             </Text>
//           </View>
//         ))}
//         <View style={[styles.tableRow, styles.totalRow]}>
//           <Text style={styles.tableCol}>Total Transaction</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}>{transactionTotal}</Text>
//         </View>
//       </View>

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         <Text>Zapfin Tekhnologies Pvt. Limited</Text>
//         <Text>(DocBoyz)</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default ReportPDF;

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#C0C0C0',
    fontSize: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 20,
  },
  logo: {
    width: 40,
    height: 'auto',
  },
  companyInfo: {
    fontSize: 10,
    fontWeight: 'normal',
    width: '45%',
    paddingLeft: 20,
  },
  company: {
    fontSize: 15,
    fontWeight: 'extrabold',
    marginBottom: 6,
  },
  reportSection: {
    marginBottom: 20,
  },
  panel: {
    marginBottom: 30,
    border: '1pt solid black',
    borderRadius: 5,
    padding: 10,
  },
  table: {
    width: '100%',
    marginBottom: 10,
    border: '1pt solid black',
  },
  tableHeader: {
    backgroundColor: '#00acc1',
    color: 'white',
    width: '20%',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableCell: {
    border: '1pt solid gray',
    padding: 5,
    textAlign: 'center',
    width: '20%',
  },
  acknowledgment: {
    marginTop: 5,
    borderBottom: '1pt solid gray',
  },
});

const ReportPDF = ({ reports, user, transactionTotal }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image src="/logo/pdfLogo.png" alt="DocBoyz Logo" style={styles.logo} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
        </View>
        <View style={styles.companyInfo}>
          <Text style={styles.company}>Zapfin Tekhnologies Pvt. Ltd.</Text>
          <Text>Aditya Business Center S N 1 A B Wing</Text>
          <Text>3rd Floor Above ICICI Bank Kondhwa</Text>
          <Text>Pune- 411048.</Text>
          <Text style={{ color: '#00acc1', textDecoration: 'underline' }}>www.docboyz.in</Text>
        </View>
      </View>

      {/* Report Section */}
      <View style={styles.reportSection}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}><b>Bill Report</b></Text>
        <Text>Name: {user ? user.name : 'N/A'}</Text>
        <Text>Email: {user ? user.email : 'N/A'}</Text>
      </View>

      {/* Table Section */}
      <View style={styles.panel}>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>REPORTS</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Sr</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Service</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Price</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Hit Count</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Total</Text>
          </View>
          {reports && reports?.map((value, index) => (
            <View className='flex' style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{index + 1}</Text>
              <Text style={styles.tableCell}>{value.api_name}</Text>
              <Text style={styles.tableCell}>{value.scheme_price}</Text>
              <Text style={styles.tableCell}>{value.hit_count}</Text>
              <Text style={styles.tableCell}>
                {user && user.scheme_type === "demo" ? "0" : value.total}
              </Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Total Transaction</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>{transactionTotal}</Text>
          </View>
        </View>
      </View>

      {/* Acknowledgment Section */}
      <View style={styles.panel}>
        <Text style={{ color: '#00acc1', fontWeight: 'bold' }}>Letter of Acknowledgment</Text>
        <Text style={styles.acknowledgment}>
          I acknowledge and agree to have shared the below mentioned documents with SHOPX in pursuance of availing a credit facility...
        </Text>
        {/* List of Documents */}
        <Text style={{color: '#00acc1', fontWeight: 'bold', marginTop: 20}}>Documents:</Text>
        <Text style={{marginVertical: 5}}>1. Application Form filled and signed with Email id</Text>
        <Text style={{marginVertical: 5}}>2. Business registration proof (any one): GST Registration / Udyog Aadhaar / ITR / Weighing scale / Shop and establishment</Text>
        <Text style={{marginVertical: 5}}>3. Proprietor PAN</Text>
        <Text style={{marginVertical: 5}}>4. Current residence address proof (any one): Rent agreement / Adhaar / Driving licence / Passport / Electricity bill / Utility bill / Voter ID</Text>
        <Text style={{marginVertical: 5}}>5. Passport Size Photo</Text>
        <Text style={{marginVertical: 5}}>6. Cancelled cheque/Bank Account Details</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Zapfin Tekhnologies Pvt. Limited</Text>
        <Text>(DocBoyz)</Text>
      </View>
    </Page>
  </Document>
);

export default ReportPDF;
