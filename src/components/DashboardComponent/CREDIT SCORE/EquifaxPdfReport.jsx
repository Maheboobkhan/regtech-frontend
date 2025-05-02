// // src/CreditReport.js
// import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const CreditReport = () : {
// const myarray = {
//   date: '2024-10-10',
//   orderNo: '123456',
//   time: '10:00 AM',
//   CustRefField: 'ABC123',
//   consumerName: 'John Doe',
//   PAN: 'ABCDE1234F',
//   VoterID: 'VOTER123',
//   DOB: '1990-01-01',
//   NationalIDCard: 'NID123456',
//   Number: '1234567890',
//   score_details: [
//     {
//       Name: 'Risk Score',
//       Version: 'V1',
//       Value: '750',
//       ScoringElements: [
//         { seq: 1, Description: 'Payment History' },
//         { seq: 2, Description: 'Credit Utilization' },
//       ],
//     },
//     // Add more score details if necessary
//   ],
// };

// const equifax = {
//   logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
//   ClientID: 'CLIENT123',
// };
//   const generatePDF = () : {
//     const input = document.getElementById('credit-report');
//     html2canvas(input).then((canvas) : {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       const imgWidth = 190; // Width of the PDF page
//       const pageHeight = pdf.internal.pageSize.height;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;

//       let position = 0;

//       pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       pdf.save('credit-report.pdf');
//     });
//   };

//   return (
//     <div>
//       <button onClick={generatePDF}>Download PDF</button>
//       <div id="credit-report" style={{ backgroundColor: 'white', padding: '20px' }}>
//         <header>
//           <div className="header">
//             <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
//               <img src={equifax.logo} alt="logo" style={{ width: '150px', height: '140px', marginRight: '20px' }} />
//               <h1 style={{ color: 'grey', margin: 0 }}>CONSUMER CREDIT REPORT V2.0</h1>
//             </div>
//             <table>
//               <tbody>
//                 <tr>
//                   <td><span>CLIENT ID:</span> <span>{equifax.ClientID || ''}</span></td>
//                   <td><span>DATE:</span> <span>{myarray.date || ''}</span></td>
//                 </tr>
//                 <tr>
//                   <td><span>REPORT ORDER NO:</span> <span>{myarray.orderNo || ''}</span></td>
//                   <td><span>TIME:</span> <span>{myarray.time || ''}</span></td>
//                 </tr>
//                 <tr>
//                   <td><span>REFERENCE NUMBER:</span> <span>{myarray.CustRefField}</span></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <hr />
//         </header>
//         <main>
//           <div>
//             <h3>Consumer Name: {myarray.consumerName || ''}</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Personal Information</th>
//                   <th>Identification</th>
//                   <th>Contact Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Previous Name:</td>
//                   <td>PAN: <span>{myarray.PAN || ''}</span></td>
//                   <td>Home: <span>{myarray.Number || ''}</span></td>
//                 </tr>
//                 <tr>
//                   <td>Alias Name:</td>
//                   <td>Voter ID: <span>{myarray.VoterID || ''}</span></td>
//                   <td>Office:</td>
//                 </tr>
//                 <tr>
//                   <td>DOB: <span>{myarray.DOB || ''}</span></td>
//                   <td>Passport ID: <span>{myarray.NationalIDCard || ''}</span></td>
//                   <td>Mobile:</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div>
//               <h3>Equifax Score(s):</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Score Name</th>
//                     <th>Score</th>
//                     <th>Scoring Elements</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {myarray.score_details.map((score, index) : (
//                     <tr key={index}>
//                       <td>Equifax Risk Score - {score.Name} {score.Version}</td>
//                       <td>{score.Value}</td>
//                       <td>
//                         {score.ScoringElements && score.ScoringElements.map((element, idx) : (
//                           <div key={idx}>{element.seq}. {element.Description}</div>
//                         ))}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CreditReport;

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
    fontSize: 12,
    color: "black",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#C0C0C0",
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#8B0000",
    // color: "white",
    padding: 10,
  },
  title: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    border: "1px solid black",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },
  tableCol: {
    flex: 1, // Adjusts to take full width evenly
    padding: 5,
    textAlign: "left",
  },
  dataField: {
    fontWeight: "bold",
    color: "#8B0000",
  },
  dataTitle: {
    backgroundColor: "#8B0000",
    color: "white",
    padding: 5,
  },
  consumerAddress: {
    color: "black",
    fontSize: 14,
  },
  tdElements: {
    color: "grey",
    fontStyle: "italic",
  },
  tableColAddress: {
    flex: 4,  // Address column takes up 40% of the total width
  },
});

const EquifaxPdfReport = ({myarray, equifax}) => {
  // console.log('myarray: ',myarray);
  // console.log('equifax: ',equifax);
  // const myarray = {
  //   date: "2024-10-10",
  //   time: "14:30",
  //   orderNo: "ORD123456",
  //   CustRefField: "REF78910",
  //   consumerName: "John Doe",
  //   PAN: "ABCDE1234F",
  //   VoterID: "VOTER123456",
  //   DOB: "1990-01-01",
  //   age: "34",
  //   gender: "Male",
  //   Number: "1234567890",
  //   NationalIDCard: "NID12345678",
  //   enquiry_summary: {
  //     TotalInquiries: 5,
  //     AccountsOpened: 1,
  //     AccountsUpdated: 2,
  //     AccountsDeliquent: 1,
  //   },
  //   consumer_address: [
  //     {
  //       Address: "123 Main St",
  //       State: "CA",
  //       Postal: "90001",
  //       ReportedDate: "2024-10-01",
  //     },
  //     {
  //       Address: "456 Elm St",
  //       State: "CA",
  //       Postal: "90002",
  //       ReportedDate: "2024-09-15",
  //     },
  //   ],
  //   score_details: [
  //     {
  //       Name: "Equifax Risk Score",
  //       Version: "V1",
  //       Value: 750,
  //       ScoringElements: [
  //         { seq: 1, Description: "Payment history" },
  //         { seq: 2, Description: "Credit utilization" },
  //       ],
  //     },
  //   ],
  //   numberofAccounts: 10,
  //   TotalBalanceAmount: 15000,
  //   recentAccount: "ABC Bank",
  //   numberOfOpenAccount: 5,
  //   TotalPastAmount: 2000,
  //   oldestAccount: "2015-05-20",
  //   numberOfPastDueAccount: 2,
  //   TotalHighCredit: 5000,
  //   TotalCreditLimit: 20000,
  //   NoOfWriteOffs: 0,
  //   TotalSanctionAmount: 10000,
  //   SingleHighestCredit: 3000,
  //   NoOfZeroBalanceAccounts: 1,
  //   TotalMonthlyPaymentAmount: 400,
  //   SingleHighestSanctionAmount: 5000,
  //   SingleHighestBalance: 3000,
  //   RetailAccountDetails: [
  //     {
  //       AccountNumber: "123456789",
  //       Balance: 5000,
  //       Open: "2020-01-01",
  //       Institution: "ABC Bank",
  //       PastDueAmount: 500,
  //       DateOpened: "2020-01-01",
  //       AccountType: "Credit Card",
  //       LastPaymentDate: "2024-09-15",
  //       OwnershipType: "Individual",
  //       SanctionAmount: 1000,
  //       History48Months: [
  //         {
  //           PaymentStatus: "On Time",
  //           AssetClassificationStatus: "Good",
  //           SuitFiledStatus: "No",
  //           key: "1",
  //         },
  //         {
  //           PaymentStatus: "On Time",
  //           AssetClassificationStatus: "Good",
  //           SuitFiledStatus: "No",
  //           key: "2",
  //         },
  //       ],
  //     },
  //   ],
  //   enquiries: [
  //     {
  //       seq: 1,
  //       Institution: "XYZ Bank",
  //       Date: "2024-09-15",
  //       Time: "10:00",
  //       RequestPurpose: "Loan Application",
  //       Amount: 10000,
  //     },
  //   ],
  //   Purpose: "Loan",
  //   Total: 3,
  //   Past30Days: 1,
  //   Past12Months: 2,
  //   Past24Months: 3,
  //   Recent: 1,
  // };

  // const equifax = {
  //   InquiryResponseHeader: {
  //     ClientID: "CLIENT123",
  //   },
  // };

  return (
    <Document>
      <Page size={[1100, 1080]} style={styles.page}>
        <View style={styles.header}>
          <Image
            src="/logo/equifax-logo.jpg"
            style={{ width: 150, height: 40 }}
          />
          <Text style={styles.title}>CONSUMER CREDIT REPORT V2.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={{marginTop: 10}}>CLIENT ID: {equifax?.InquiryResponseHeader?.ClientID}</Text>
          <Text style={{marginTop: 6}}>DATE: {myarray?.date}</Text>
          <Text style={{marginTop: 6}}>REPORT ORDER NO: {myarray?.orderNo}</Text>
          <Text style={{marginTop: 6}}>TIME: {myarray?.time}</Text>
          <Text style={{marginTop: 6}}>REFERENCE NUMBER: {myarray?.CustRefField}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>
            Consumer Name: {myarray?.consumerName}
          </Text>
        </View>

        {/* Personal Information Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.dataTitle]}>
              Personal Information
            </Text>
            <Text style={[styles.tableCol, styles.dataTitle]}>
              Identification
            </Text>
            <Text style={[styles.tableCol, styles.dataTitle]}>
              Contact Details
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Previous Name: </Text>
            <Text style={styles.tableCol}>PAN: {myarray?.PAN}</Text>
            <Text style={styles.tableCol}>Home: {myarray?.Number || ""}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Alias Name: </Text>
            <Text style={styles.tableCol}>VoterID: {myarray?.VoterID}</Text>
            <Text style={styles.tableCol}>Office: </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>DOB: {myarray?.DOB}</Text>
            <Text style={styles.tableCol}>
              Passport Id: {myarray?.NationalIDCard}
            </Text>
            <Text style={styles.tableCol}>Mobile: </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Age: {myarray?.age}</Text>
            <Text style={styles.tableCol}>UID: </Text>
            <Text style={styles.tableCol}>Alt. Home/Other No. : </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Gender: {myarray?.gender}</Text>
            <Text style={styles.tableCol}>
              Driver's License: {myarray?.driving_license}
            </Text>
            <Text style={styles.tableCol}>Alt. Office : </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Total Income: {myarray?.DOB}</Text>
            <Text style={styles.tableCol}>
              Ration Card: {myarray?.NationalIDCard}
            </Text>
            <Text style={styles.tableCol}>Alt. Mobile: </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Occupation: {myarray?.DOB}</Text>
            <Text style={styles.tableCol}>
              Photo Credit Card: {myarray?.NationalIDCard}
            </Text>
            <Text style={styles.tableCol}>Email: </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}>
              ID - Other: {myarray?.NationalIDCard}
            </Text>
            <Text style={styles.tableCol}></Text>
          </View>
          {/* Add other rows as necessary */}
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>Consumer Address:</Text>
          {/* Address Table */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.dataTitle]}>Type</Text>
              <Text style={[styles.tableCol, styles.dataTitle, styles.tableColAddress]}>Address</Text>
              <Text style={[styles.tableCol, styles.dataTitle]}>State</Text>
              <Text style={[styles.tableCol, styles.dataTitle]}>Postal</Text>
              <Text style={[styles.tableCol, styles.dataTitle]}>
                Date Reported
              </Text>
            </View>
            {myarray?.consumer_address?.map((address, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>Primary</Text>
                <Text style={[styles.tableCol, styles.tableColAddress]}>{address?.Address}</Text>
                <Text style={styles.tableCol}>{address?.State}</Text>
                <Text style={styles.tableCol}>{address?.Postal}</Text>
                <Text style={styles.tableCol}>{address?.ReportedDate}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>Equifax Score(s):</Text>
          {/* Score Table */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.dataTitle]}>
                Score Name
              </Text>
              <Text style={[styles.tableCol, styles.dataTitle]}>Score</Text>
              <Text style={[styles.tableCol, styles.dataTitle]}>
                Scoring Elements
              </Text>
            </View>
            {myarray?.score_details?.map((score, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>
                  Equifax Risk Score - {score?.Name} {score?.Version}
                </Text>
                <Text style={styles.tableCol}>{score?.Value}</Text>
                <Text style={styles.tableCol}>
                  {score?.ScoringElements?.map((element, i) => (
                    <Text key={i}>
                      {element?.seq}. {element?.Description}
                    </Text>
                  ))}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>Recent Activity: </Text>
        </View>

        <View style={styles.section}>
          {/* Score Table */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.dataTitle]}>
                Recent Activity(last 90 days):
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Total Inquiries: {myarray?.enquiry_summary?.TotalInquiries}
            </Text>
            <Text style={styles.tableCol}>
              Accounts Opened: {myarray?.enquiry_summary?.AccountsOpened}
            </Text>
            <Text style={styles.tableCol}>
              Accounts Updated:{" "}
              {myarray?.enquiry_summary?.AccountsUpdated || ""}
            </Text>
            <Text style={styles.tableCol}>
              Accounts Delinquent:{" "}
              {myarray?.enquiry_summary?.AccountsDeliquent || ""}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>Summary*: </Text>
        </View>

        <View style={styles.section}>
          {/* Score Table */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.dataTitle]}>
                Credit Report Summary:
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Number of Accounts: {myarray?.numberofAccounts}
            </Text>
            <Text style={styles.tableCol}>
              Total Balance Amount: {myarray?.TotalBalanceAmount}
            </Text>
            <Text style={styles.tableCol}>
              Recent Account: {myarray?.recentAccount || ""}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Number of Open Accounts: {myarray?.numberOfOpenAccount || ""}
            </Text>
            <Text style={styles.tableCol}>
              Total Past Due Amount: {myarray?.TotalPastAmount || ""}
            </Text>
            <Text style={styles.tableCol}>
              Oldest Account: {myarray?.oldestAccount || ""}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Number of Past Due Accounts:{" "}
              {myarray?.numberOfPastDueAccount || ""}
            </Text>
            <Text style={styles.tableCol}>
              Total High Credit: {myarray?.TotalHighCredit || ""}
            </Text>
            <Text style={styles.tableCol}>
              Total Credit Limit: {myarray?.TotalCreditLimit || ""}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Number of Write-off Accounts: {myarray?.NoOfWriteOffs || ""}
            </Text>
            <Text style={styles.tableCol}>
              Total Sanction Amount: {myarray?.TotalSanctionAmount || ""}
            </Text>
            <Text style={styles.tableCol}>
              Single Highest Credit: {myarray?.SingleHighestCredit || ""}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Number of Zero Balance Accounts:{" "}
              {myarray?.NoOfZeroBalanceAccounts || ""}
            </Text>
            <Text style={styles.tableCol}>
              Total Monthly Payment Amount:{" "}
              {myarray?.TotalMonthlyPaymentAmount || ""}
            </Text>
            <Text style={styles.tableCol}>
              Single Highest Sanction Amount:{" "}
              {myarray?.SingleHighestSanctionAmount || ""}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>
              Most Severe Status Less than 24 Months:{" "}
            </Text>
            <Text style={styles.tableCol}>
              Average Open Balance: {myarray?.AverageOpenBalance || ""}
            </Text>
            <Text style={styles.tableCol}>
              Single Highest Balance: {myarray?.SingleHighestBalance || ""}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.dataField}>Account Details: </Text>
        </View>

        {myarray && myarray.RetailAccountDetails?.map((RetailAccountDetail, index) => (
        <View key={index} style={styles.section}>
            {/* Account Details Table */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCol, styles.dataTitle]}>
                        Account:
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Acct#: {RetailAccountDetail?.AccountNumber || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Balance: {RetailAccountDetail?.Balance || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Open: {RetailAccountDetail?.Open || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Date Reported: {RetailAccountDetail?.DateReported || ''}
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Institution: {RetailAccountDetail?.Institution || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Past Due Amount: {RetailAccountDetail?.PastDueAmount || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Interest Rate: {RetailAccountDetail?.InterestRate || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Date Opened: {RetailAccountDetail?.DateOpened || ''}
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Type: {RetailAccountDetail?.AccountType || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Last Payment: {RetailAccountDetail?.LastPayment || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Last Payment Date: {RetailAccountDetail?.LastPaymentDate || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Date Closed: {RetailAccountDetail?.DateClosed || ''}
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Ownership Type: {RetailAccountDetail?.OwnershipType || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Write-off Amount: {RetailAccountDetail?.WriteOffAmount || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Sanction Amount: {RetailAccountDetail?.SanctionAmount || ''}
                    </Text>
                    <Text style={styles.tableCol}>
                        Reason: {RetailAccountDetail?.Reason || ''}
                    </Text>
                </View>
            </View>

            {/* Account History Table */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCol, styles.dataTitle]}>
                        Account History:
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCol, styles.tableColFitWidth]}>
                        Account Status:
                    </Text>
                    {RetailAccountDetail?.History48Months?.map((history, hIndex) => (
                        <Text key={hIndex} style={styles.tableCol}>
                            {history?.PaymentStatus}
                        </Text>
                    ))}
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Asset Classification:
                    </Text>
                    {RetailAccountDetail?.History48Months?.map((history, hIndex) => (
                        <Text key={hIndex} style={styles.tableCol}>
                            {history?.AssetClassificationStatus}
                        </Text>
                    ))}
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Suit Filed Status:
                    </Text>
                    {RetailAccountDetail?.History48Months.map((history, hIndex) => (
                        <Text key={hIndex} style={styles.tableCol}>
                            {history.SuitFiledStatus}
                        </Text>
                    ))}
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>
                        Key:
                    </Text>
                    {RetailAccountDetail?.History48Months.map((history, hIndex) => (
                        <Text key={hIndex} style={styles.tableCol}>
                            {history.key}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    ))}

    {myarray && myarray?.enquiries !== '' && (
      <View style={styles.section}>
      <Text style={styles.dataField}>Enquiries:</Text>
      {/* Score Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Sequence
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>Institution</Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Date
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Time
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Request Purpose
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Amount
          </Text>
        </View>
        {myarray && myarray?.enquiries?.map((enquiries, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>
              {enquiries?.seq+1}
            </Text>
            <Text style={styles.tableCol}>{enquiries.Institution}</Text>
            <Text style={styles.tableCol}>{enquiries.Date}</Text>
            <Text style={styles.tableCol}>{enquiries.Time}</Text>
            <Text style={styles.tableCol}>{enquiries.RequestPurpose}</Text>
            <Text style={styles.tableCol}>{enquiries.Amount}</Text>
          </View>
        ))}
      </View>
    </View>)}
    <hr />

    <View style={styles.section}>
      <Text style={styles.dataField}>Enquiry Summary:</Text>
      {/* Score Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Purpose
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Total
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Past 30 Days
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Past 12 Months
          </Text>
          <Text style={[styles.tableCol, styles.dataTitle]}>
            Past 24 Months
          </Text>

          <Text style={[styles.tableCol, styles.dataTitle]}>
            Recent
          </Text>
        </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{myarray?.Purpose}</Text>
            <Text style={styles.tableCol}>{myarray?.Total}</Text>
            <Text style={styles.tableCol}>{myarray?.Past30Days}</Text>
            <Text style={styles.tableCol}>{myarray?.Past12Months}</Text>
            <Text style={styles.tableCol}>{myarray?.Past24Months}</Text>
            <Text style={styles.tableCol}>{myarray?.Recent}</Text>
          </View>

      </View>
    </View>

        {/* Additional sections for Recent Activity, Summary, etc. */}
        {/* Follow similar structure to add tables and data */}
        {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Zapfin Tekhnologies Pvt. Limited</Text>
        <Text>(DocBoyz)</Text>
      </View>
      </Page>
    </Document>
  );
};

export default EquifaxPdfReport;










// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
// // import './CreditReport.css'; // External CSS for styles

// const CreditReport = ({ myarray, equifax }) => {
//   console.log('myarray: ',myarray);
//   console.log('equifax: ',equifax);
//   const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: 'Credit Report',
//   });

//   return (
//     <div>
//       <button onClick={handlePrint}>Download PDF</button>
//       <div ref={componentRef}>
//         <header>
//           <div className="header">
//             <div className="row">
//               <div className="col-md-4 offset-md-3">
//                 <img
//                   // src={process.env.PUBLIC_URL + '/uploads/equifax-logo.jpg'}
//                   alt="logo"
//                   style={{ marginRight: '40px', width: '20%', height: '30px' }}
//                 />
//               </div>
//               <h1 style={{ color: 'grey' }}>CONSUMER CREDIT REPORT V2.0</h1>
//             </div>

//             <table>
//               <tbody>
//                 <tr>
//                   <td>
//                     <span className="td-style">CLIENT ID:</span>
//                     <span className="text_space">
//                       {equifax?.InquiryResponseHeader?.ClientID || ''}
//                     </span>
//                   </td>
//                   <td>
//                     <span className="td-style">DATE:</span>
//                     <span className="text_space">{myarray?.date || ''}</span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <span className="td-style">REPORT ORDER NO:</span>
//                     <span className="text_space">{myarray?.orderNo || ''}</span>
//                   </td>
//                   <td>
//                     <span className="td-style">TIME:</span>
//                     <span className="text_space">{myarray?.time || ''}</span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <span className="td-style">REFERENCE NUMBER:</span>
//                     <span className="text_space">{myarray?.CustRefField || ''}</span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <hr />
//         </header>

//         <main>
//           <div className="container" style={{ backgroundColor: 'white' }}>
//             <div className="row">
//               <table>
//                 <thead>
//                   <tr>
//                     <td>
//                       <h3 className="data-field">
//                         Consumer Name: {myarray?.consumerName || ''}
//                       </h3>
//                     </td>
//                   </tr>
//                 </thead>
//               </table>
//             </div>

//             <div className="row">
//               <table className="table" cellSpacing="0">
//                 <tbody>
//                   <tr className="data-title">
//                     <td>Personal Information</td>
//                     <td>Identification</td>
//                     <td>Contact Details</td>
//                   </tr>
//                   <tr className="td-elements">
//                     <td><span>Previous Name:</span></td>
//                     <td><span>PAN:</span> <span className="text_space">{myarray?.PAN || ''}</span></td>
//                     <td><span>Home:</span> <span className="text_space">{myarray?.Number || ''}</span></td>
//                   </tr>
//                   <tr className="td-elements">
//                     <td><span>Alias Name:</span></td>
//                     <td><span>Voter ID:</span> <span className="text_space">{myarray?.VoterID || ''}</span></td>
//                     <td><span>Office:</span></td>
//                   </tr>
//                   <tr className="td-elements">
//                     <td><span>DOB:</span> <span className="text_space">{myarray?.DOB || ''}</span></td>
//                     <td><span>Passport ID:</span> <span className="text_space">{myarray?.NationalIDCard || ''}</span></td>
//                     <td><span>Mobile:</span></td>
//                   </tr>
//                   <tr className="td-elements">
//                     <td><span>Age:</span> <span className="text_space">{myarray?.age || ''}</span></td>
//                     <td><span>UID:</span></td>
//                     <td><span>Alt. Home/Other No. :</span></td>
//                   </tr>
//                   <tr className="td-elements">
//                     <td><span>Gender:</span> <span className="text_space">{myarray?.gender || ''}</span></td>
//                     <td><span>Driver's License:</span> <span className="text_space">{myarray?.driving_licence || ''}</span></td>
//                     <td><span>Alt. Office:</span></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <hr />

//             <div className="row">
//               <table>
//                 <thead>
//                   <tr>
//                     <td>
//                       <h3 className="data-field">Consumer Address:</h3>
//                     </td>
//                   </tr>
//                 </thead>
//               </table>
//             </div>

//             <div className="row">
//               <table className="table text-center" cellSpacing="0">
//                 <thead className="data-title">
//                   <tr>
//                     <th>Type</th>
//                     <th>Address</th>
//                     <th>State</th>
//                     <th>Postal</th>
//                     <th>Date Reported</th>
//                   </tr>
//                 </thead>
//                 <tbody className="table-style">
//                   {myarray.consumer_address?.map((address, index) => (
//                     <tr key={index}>
//                       <td className="consumer_address">Primary</td>
//                       <td>{address?.Address || ' '}</td>
//                       <td>{address?.State || ' '}</td>
//                       <td>{address?.Postal || ' '}</td>
//                       <td>{address?.ReportedDate || ' '}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <hr />

//             <div className="row">
//               <table>
//                 <thead>
//                   <tr>
//                     <td>
//                       <h3 className="data-field">Equifax Score(s):</h3>
//                     </td>
//                   </tr>
//                 </thead>
//               </table>
//             </div>

//             <div className="row">
//               <table className="table text-center" cellSpacing="0">
//                 <tbody>
//                   <tr className="data-title" style={{ textAlign: 'center' }}>
//                     <td>Score Name</td>
//                     <td>Score</td>
//                     <td>Scoring Elements</td>
//                   </tr>
//                   {myarray.score_details?.map((score, index) => (
//                     <tr key={index}>
//                       <td style={{ textAlign: 'center' }}>{score?.scoreName || ''}</td>
//                       <td style={{ textAlign: 'center' }}>{score?.score || ''}</td>
//                       <td style={{ textAlign: 'center' }}>{score?.scoringElements || ''}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CreditReport;