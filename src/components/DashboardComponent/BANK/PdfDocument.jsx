// // // PdfDocument.js
// // import React from 'react';
// // import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// // // Register a custom font if necessary
// // // Font.register({
// // //   family: 'YourFontName',
// // //   src: 'path/to/font.ttf',
// // // });

// // const styles = StyleSheet.create({
// //   page: {
// //     flexDirection: 'column',
// //     padding: 10,
// //     backgroundColor: 'white',
// //     fontSize: 12,
// //   },
// //   header: {
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   footer: {
// //     position: 'absolute',
// //     bottom: 30,
// //     left: 0,
// //     right: 0,
// //     textAlign: 'center',
// //   },
// //   title: {
// //     fontSize: 18,
// //     marginBottom: 10,
// //   },
// //   table: {
// //     display: 'table',
// //     width: 'auto',
// //     marginBottom: 20,
// //   },
// //   tableRow: {
// //     flexDirection: 'row',
// //   },
// //   tableCell: {
// //     border: '1px solid #000',
// //     padding: 5,
// //     fontSize: 12,
// //   },
// //   dataTitle: {
// //     backgroundColor: '#8B0000',
// //     color: 'white',
// //     padding: 10,
// //   },
// //   dataField: {
// //     color: 'grey',
// //     marginBottom: 10,
// //   },
// // });

// // const PdfDocument = ({ data }) => (
// //   <Document>
// //     <Page size="A4" style={styles.page}>
// //       <View style={styles.header}>
// //         <Text style={styles.title}>Bank Statement</Text>
// //         <Text style={styles.dataField}>Powered by RegTech</Text>
// //       </View>

// //       {/* Withdrawals Section */}
// //       <Text style={styles.dataField}>Amount Withdrawals:</Text>
// //       <View style={styles.table}>
// //         {data.withdrawals.map((item, index) => (
// //           <View style={styles.tableRow} key={index}>
// //             <Text style={styles.tableCell}>{item.date}</Text>
// //             <Text style={styles.tableCell}>{item.amount}</Text>
// //             <Text style={styles.tableCell}>{item.description}</Text>
// //             <Text style={styles.tableCell}>{item.bank}</Text>
// //             <Text style={styles.tableCell}>{item.monthAndYear}</Text>
// //             <Text style={styles.tableCell}>{item.total}</Text>
// //           </View>
// //         ))}
// //       </View>

// //       {/* More sections can be added similarly */}

// //       <View style={styles.footer}>
// //         <Text>Contact Us: support@docboyz.in</Text>
// //       </View>
// //     </Page>
// //   </Document>
// // );

// // export default PdfDocument;

// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     padding: 10,
//     backgroundColor: 'white',
//     fontSize: 12,
//   },
//   header: {
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     marginBottom: 20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCell: {
//     border: '1px solid #000',
//     padding: 5,
//     fontSize: 12,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     marginTop: 10,
//     marginBottom: 5,
//     textDecoration: 'underline',
//   },
// });

// const PdfDocument = ({ data }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Bank Statement</Text>
//         <Text>Powered by RegTech</Text>
//       </View>

//       {/* Withdrawals Section */}
//       <Text style={styles.sectionTitle}>Amount Withdrawals:</Text>
//       <View style={styles.table}>
//         {data?.response?.atm_withdrawls?.map((item, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCell}>{item.date}</Text>
//             <Text style={styles.tableCell}>{item.amount}</Text>
//             <Text style={styles.tableCell}>{item.description}</Text>
//             <Text style={styles.tableCell}>{item.bank}</Text>
//             <Text style={styles.tableCell}>{item.monthAndYear}</Text>
//             <Text style={styles.tableCell}>{item.total}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Average Monthly Balance Section */}
//       <Text style={styles.sectionTitle}>Average Monthly Balance:</Text>
//       <View style={styles.table}>
//         {data?.response?.averageMonthlyBalance?.map((item, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCell}>{item.monthAndYear}</Text>
//             <Text style={styles.tableCell}>{item.netAverageBalance}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Expenses Section */}
//       <Text style={styles.sectionTitle}>Expenses:</Text>
//       <View style={styles.table}>
//         {data?.response?.expenses?.map((item, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCell}>{item.date}</Text>
//             <Text style={styles.tableCell}>{item.description}</Text>
//             <Text style={styles.tableCell}>{item.category}</Text>
//             <Text style={styles.tableCell}>{item.amount}</Text>
//             <Text style={styles.tableCell}>{item.mode}</Text>
//           </View>
//         ))}
//       </View>

//       {/* High Value Transactions Section */}
//       <Text style={styles.sectionTitle}>High Value Transactions:</Text>
//       <View style={styles.table}>
//         {data?.response?.high_value_transactions?.map((item, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCell}>{item.date}</Text>
//             <Text style={styles.tableCell}>{item.description}</Text>
//             <Text style={styles.tableCell}>{item.category}</Text>
//             <Text style={styles.tableCell}>{item.amount}</Text>
//             <Text style={styles.tableCell}>{item.balanceAfterTranscation}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Incomes Section */}
//       <Text style={styles.sectionTitle}>Incomes:</Text>
//       <View style={styles.table}>
//         {data?.response?.incomes?.map((item, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={styles.tableCell}>{item.date}</Text>
//             <Text style={styles.tableCell}>{item.description}</Text>
//             <Text style={styles.tableCell}>{item.mode}</Text>
//             <Text style={styles.tableCell}>{item.isSalary ? 'Yes' : 'No'}</Text>
//             <Text style={styles.tableCell}>{item.amount}</Text>
//             <Text style={styles.tableCell}>{item.balanceAfterTransaction}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.footer}>
//         <Text>Contact Us: support@docboyz.in</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default PdfDocument;

// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: '#C0C0C0',
//     fontSize: 12,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: 20,
//   },
//   logo: {
//     width: 40,
//     height: 'auto',
//   },
//   companyInfo: {
//     fontSize: 10,
//     fontWeight: 'normal',
//     width: '45%',
//     paddingLeft: 20,
//   },
//   company: {
//     fontSize: 15,
//     fontWeight: 'extrabold',
//     marginBottom: 6,
//   },
//   reportSection: {
//     marginBottom: 20,
//   },
//   panel: {
//     marginBottom: 30,
//     border: '1pt solid black',
//     borderRadius: 5,
//     padding: 10,
//   },
//   table: {
//     width: '100%',
//     marginBottom: 10,
//     border: '1pt solid black',
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     width: '20%',
//   },
//   tableRow: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   tableCell: {
//     border: '1pt solid gray',
//     padding: 5,
//     textAlign: 'center',
//     width: '20%',
//   },
//   acknowledgment: {
//     marginTop: 5,
//     borderBottom: '1pt solid gray',
//   },
// });

// const StatementPDF = ({
//   atmWithdrawl,
//   averageMonthlyBalance,
//   averageQuarterlyBalance,
//   expenses,
//   highValueTransactions,
//   incomes,
//   minimumBalances,
//   moneyReceivedTransactions,
// }) => (
//   <Document style={{width: '100vw'}}>
//     <Page style={styles.page}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.logoContainer}>
//           <Image src="/logo/pdfLogo.png" alt="DocBoyz Logo" style={styles.logo} />
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
//         </View>
//       </View>

//       {/* ATMs Withdrawals Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>ATM Withdrawals</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Bank</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>MonthAndYear</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Total</Text>
//           </View>
//           {atmWithdrawl.map((withdrawal, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{withdrawal.date}</Text>
//               <Text style={styles.tableCell}>{withdrawal.amount}</Text>
//               <Text style={styles.tableCell}>{withdrawal.description}</Text>
//               <Text style={styles.tableCell}>{withdrawal.bank}</Text>
//               <Text style={styles.tableCell}>{withdrawal.monthAndYear}</Text>
//               <Text style={styles.tableCell}>{withdrawal.total}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Average Monthly Balance Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Average Monthly Balance</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>MonthAndYear</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Net Average Balance</Text>
//           </View>
//           {averageMonthlyBalance.map((balance, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{balance.monthAndYear}</Text>
//               <Text style={styles.tableCell}>{balance.netAverageBalance}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Average Quarterly Balance Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Average Quarterly Balance</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>MonthAndYear</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Net Average Balance</Text>
//           </View>
//           {averageQuarterlyBalance.map((balance, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{balance.monthAndYear}</Text>
//               <Text style={styles.tableCell}>{balance.netAverageBalance}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Expenses Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Expenses</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Category</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Mode</Text>
//           </View>
//           {expenses.map((expense, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{expense.date}</Text>
//               <Text style={styles.tableCell}>{expense.description}</Text>
//               <Text style={styles.tableCell}>{expense.category}</Text>
//               <Text style={styles.tableCell}>{expense.amount}</Text>
//               <Text style={styles.tableCell}>{expense.mode}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* High Value Transactions Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>High Value Transactions</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Category</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Balance After Transaction</Text>
//           </View>
//           {highValueTransactions.map((transaction, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{transaction.date}</Text>
//               <Text style={styles.tableCell}>{transaction.description}</Text>
//               <Text style={styles.tableCell}>{transaction.category}</Text>
//               <Text style={styles.tableCell}>{transaction.amount}</Text>
//               <Text style={styles.tableCell}>{transaction.balanceAfterTransaction}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Incomes Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Incomes</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Mode</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Is Salary</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Balance After Transaction</Text>
//           </View>
//           {incomes.map((income, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{income.date}</Text>
//               <Text style={styles.tableCell}>{income.description}</Text>
//               <Text style={styles.tableCell}>{income.mode}</Text>
//               <Text style={styles.tableCell}>{income.isSalary ? 'Yes' : 'No'}</Text>
//               <Text style={styles.tableCell}>{income.amount}</Text>
//               <Text style={styles.tableCell}>{income.balanceAfterTransaction}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Minimum Balances Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Minimum Balances</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Transaction Type</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Balance After Transaction</Text>
//           </View>
//           {minimumBalances.map((balance, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{balance.date}</Text>
//               <Text style={styles.tableCell}>{balance.description}</Text>
//               <Text style={styles.tableCell}>{balance.transactionType}</Text>
//               <Text style={styles.tableCell}>{balance.amount}</Text>
//               <Text style={styles.tableCell}>{balance.balanceAfterTransaction}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Money Received Transactions Section */}
//       <View style={styles.panel}>
//         <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 15 }}>Money Received Transactions</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Description</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Category</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Transaction Type</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Amount</Text>
//             <Text style={[styles.tableCell, styles.tableHeader]}>Balance After Transaction</Text>
//           </View>
//           {moneyReceivedTransactions.map((transaction, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCell}>{transaction.date}</Text>
//               <Text style={styles.tableCell}>{transaction.description}</Text>
//               <Text style={styles.tableCell}>{transaction.category}</Text>
//               <Text style={styles.tableCell}>{transaction.transactionType}</Text>
//               <Text style={styles.tableCell}>{transaction.amount}</Text>
//               <Text style={styles.tableCell}>{transaction.balanceAfterTransaction}</Text>
//             </View>
//           ))}
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

// export default StatementPDF;

// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 10,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: '#C0C0C0',
//     fontSize: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: 20,
//   },
//   logo: {
//     width: 40,
//     height: 'auto',
//   },
//   panel: {
//     marginBottom: 30,
//     border: '1pt solid black',
//     borderRadius: 5,
//     padding: 10,
//   },
//   table: {
//     width: '100%',
//     marginBottom: 10,
//     border: '1pt solid black',
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     fontSize: 9,
//   },
//   tableRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   tableCell: {
//     border: '1pt solid gray',
//     padding: 3,
//     textAlign: 'center',
//     flex: 1,
//     fontSize: 8, // Smaller font size for better fitting
//   },
// });

// // Utility function for rendering tables
// const renderTable = (header, data, columns) => (
//   <View style={styles.panel}>
//     <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 12 }}>
//       {header}
//     </Text>
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         {columns.map((col, index) => (
//           <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
//             {col}
//           </Text>
//         ))}
//       </View>
//       {data.map((item, index) => (
//         <View style={styles.tableRow} key={index}>
//           {columns.map((col, idx) => (
//             <Text style={styles.tableCell} key={idx}>
//               {item[col] !== undefined ? item[col] : ''}
//             </Text>
//           ))}
//         </View>
//       ))}
//     </View>
//   </View>
// );

// const StatementPDF = ({
//   atmWithdrawl,
//   averageMonthlyBalance,
//   averageQuarterlyBalance,
//   expenses,
//   highValueTransactions,
//   incomes,
//   minimumBalances,
//   moneyReceivedTransactions,
// }) => (
//   <Document style={{ width: '100vw' }}>
//     <Page style={styles.page}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.logoContainer}>
//           <Image src="/logo/pdfLogo.png" alt="DocBoyz Logo" style={styles.logo} />
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
//         </View>
//       </View>

//       {/* Tables Section */}
//       {renderTable('ATM Withdrawals', atmWithdrawl, ['date', 'amount', 'description', 'bank', 'monthAndYear', 'total'])}
//       {renderTable('Average Monthly Balance', averageMonthlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Average Quarterly Balance', averageQuarterlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Expenses', expenses, ['date', 'description', 'category', 'amount', 'mode'])}
//       {renderTable('High Value Transactions', highValueTransactions, ['date', 'description', 'category', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Incomes', incomes, ['date', 'description', 'mode', 'isSalary', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Minimum Balances', minimumBalances, ['date', 'description', 'transactionType', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Money Received Transactions', moneyReceivedTransactions, ['date', 'description', 'category', 'transactionType', 'amount', 'balanceAfterTransaction'])}

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         <Text>Zapfin Tekhnologies Pvt. Limited</Text>
//         <Text>(DocBoyz)</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default StatementPDF;

// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 10,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: '#C0C0C0',
//     fontSize: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: 20,
//   },
//   logo: {
//     width: 40,
//     height: 'auto',
//   },
//   panel: {
//     marginBottom: 30,
//     border: '1pt solid black',
//     borderRadius: 5,
//     padding: 10,
//   },
//   table: {
//     width: '100%',
//     marginBottom: 10,
//     border: '1pt solid black',
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     fontSize: 9,
//   },
//   tableRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   tableCell: {
//     border: '1pt solid gray',
//     padding: 3,
//     textAlign: 'center',
//     flex: 1,
//     fontSize: 8, // Smaller font size for better fitting
//   },
// });

// // Utility function for rendering tables
// const renderTable = (header, data, columns) => (
//   <View style={styles.panel}>
//     <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 12 }}>
//       {header}
//     </Text>
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         {columns.map((col, index) => (
//           <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
//             {col}
//           </Text>
//         ))}
//       </View>
//       {data.map((item, index) => (
//         <View style={styles.tableRow} key={index}>
//           {columns.map((col, idx) => (
//             <Text style={styles.tableCell} key={idx}>
//               {item[col] !== undefined ? item[col] : ''}
//             </Text>
//           ))}
//         </View>
//       ))}
//     </View>
//   </View>
// );

// const StatementPDF = ({
//   atmWithdrawl,
//   averageMonthlyBalance,
//   averageQuarterlyBalance,
//   expenses,
//   highValueTransactions,
//   incomes,
//   minimumBalances,
//   moneyReceivedTransactions,
// }) => (
//   <Document>
//     <Page size={[800, 600]} style={styles.page}> {/* Adjust size here */}
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.logoContainer}>
//           <Image src="/logo/pdfLogo.png" alt="DocBoyz Logo" style={styles.logo} />
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
//         </View>
//       </View>

//       {/* Tables Section */}
//       {renderTable('ATM Withdrawals', atmWithdrawl, ['date', 'amount', 'description', 'bank', 'monthAndYear', 'total'])}
//       {renderTable('Average Monthly Balance', averageMonthlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Average Quarterly Balance', averageQuarterlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Expenses', expenses, ['date', 'description', 'category', 'amount', 'mode'])}
//       {renderTable('High Value Transactions', highValueTransactions, ['date', 'description', 'category', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Incomes', incomes, ['date', 'description', 'mode', 'isSalary', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Minimum Balances', minimumBalances, ['date', 'description', 'transactionType', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Money Received Transactions', moneyReceivedTransactions, ['date', 'description', 'category', 'transactionType', 'amount', 'balanceAfterTransaction'])}

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         <Text>Zapfin Tekhnologies Pvt. Limited</Text>
//         <Text>(DocBoyz)</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default StatementPDF;

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: '100%',
    borderBottom: "1pt solid #00acc1",
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 20,
  },
  logo: {
    width: 40,
    height: "auto",
    textAlign: 'center',
  },
  logo2: {
    width: 80,
    height: "auto",
  },
  panel: {
    marginBottom: 30,
    border: "1pt solid black",
    borderRadius: 5,
    padding: 10,
  },
  table: {
    width: "100%",
    marginBottom: 10,
    border: "1pt solid black",
  },
  tableHeader: {
    backgroundColor: "#00acc1",
    color: "white",
    fontSize: 9,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableCell: {
    border: "1pt solid gray",
    padding: 3,
    textAlign: "center",
    flex: 1,
    fontSize: 8, // Smaller font size for better fitting
  },
  breakPage: {
    pageBreakBefore: "always",
  },
});

// Utility function for rendering tables with page break
const renderTable = (header, data, columns) => (
  <View style={[styles.panel, styles.breakPage]}>
    <Text
      style={{
        marginBottom: 10,
        fontWeight: "bold",
        borderBottom: "1px solid gray",
        fontSize: 12,
      }}
    >
      {header}
    </Text>
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {columns.map((col, index) => (
          <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
            {col}
          </Text>
        ))}
      </View>
      {data.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          {columns.map((col, idx) => (
            <Text style={styles.tableCell} key={idx}>
              {item[col] !== undefined ? item[col] : ""}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
);

const StatementPDF = ({
  atmWithdrawl,
  averageMonthlyBalance,
  averageQuarterlyBalance,
  expenses,
  highValueTransactions,
  incomes,
  minimumBalances,
  moneyReceivedTransactions,
}) => (
  <Document>
    <Page size={[800, 1080]} style={styles.page}>
      {" "}
      {/* Adjust size here */}
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            src="/logo/logo4.png"
            alt="Regtech Logo Logo"
            style={styles.logo}
          />
          <Image
            src="/logo/logo3.png"
            alt="Regtech Logo Logo"
            style={styles.logo2}
          />
        </View>
      </View>
      {/* Tables Section */}
      {renderTable("ATM Withdrawals", atmWithdrawl, [
        "date",
        "amount",
        "description",
        "bank",
        "monthAndYear",
        "total",
      ])}
      {renderTable("Average Monthly Balance", averageMonthlyBalance, [
        "monthAndYear",
        "netAverageBalance",
      ])}
      {renderTable("Average Quarterly Balance", averageQuarterlyBalance, [
        "monthAndYear",
        "netAverageBalance",
      ])}
      {renderTable("Expenses", expenses, [
        "date",
        "description",
        "category",
        "amount",
        "mode",
      ])}
      {renderTable("High Value Transactions", highValueTransactions, [
        "date",
        "description",
        "category",
        "amount",
        "balanceAfterTranscation",
      ])}
      {renderTable("Incomes", incomes, [
        "date",
        "description",
        "mode",
        "isSalary",
        "amount",
        "balanceAfterTransaction",
      ])}
      {renderTable("Minimum Balances", minimumBalances, [
        "date",
        "description",
        "transactionType",
        "amount",
        "balanceAfterTransaction",
      ])}
      {renderTable("Money Received Transactions", moneyReceivedTransactions, [
        "date",
        "description",
        "category",
        "transactionType",
        "amount",
        "balanceAfterTransaction",
      ])}
      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Zapfin Tekhnologies Pvt. Limited</Text>
        <Text>(DocBoyz)</Text>
      </View>
    </Page>
  </Document>
);

export default StatementPDF;

// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 10,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: '#C0C0C0',
//     fontSize: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: 20,
//   },
//   logo: {
//     width: 40,
//     height: 'auto',
//   },
//   panel: {
//     marginBottom: 30,
//     border: '1pt solid black',
//     borderRadius: 5,
//     padding: 10,
//     pageBreakBefore: 'always', // Ensure a new page for each panel
//   },
//   table: {
//     width: '100%',
//     marginBottom: 10,
//     border: '1pt solid black',
//   },
//   tableHeader: {
//     backgroundColor: '#00acc1',
//     color: 'white',
//     fontSize: 9,
//   },
//   tableRow: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   tableCell: {
//     border: '1pt solid gray',
//     padding: 5,
//     textAlign: 'center',
//     flex: 1,
//     fontSize: 8,
//     wordWrap: 'break-word', // Allow wrapping within cells
//     minWidth: 50, // Ensure minimum width for better layout
//   },
// });

// // Utility function for rendering tables
// const renderTable = (header, data, columns) => (
//   <View style={styles.panel}>
//     <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 12 }}>
//       {header}
//     </Text>
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         {columns.map((col, index) => (
//           <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
//             {col}
//           </Text>
//         ))}
//       </View>
//       {data.map((item, index) => (
//         <View style={styles.tableRow} key={index}>
//           {columns.map((col, idx) => (
//             <Text style={styles.tableCell} key={idx}>
//               {item[col] !== undefined ? item[col] : ''}
//             </Text>
//           ))}
//         </View>
//       ))}
//     </View>
//   </View>
// );

// const StatementPDF = ({
//   atmWithdrawl,
//   averageMonthlyBalance,
//   averageQuarterlyBalance,
//   expenses,
//   highValueTransactions,
//   incomes,
//   minimumBalances,
//   moneyReceivedTransactions,
// }) => (
//   <Document>
//     <Page size={[800, 600]} style={styles.page}> {/* Adjust size here */}
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.logoContainer}>
//           <Image src="/logo/pdfLogo.png" alt="DocBoyz Logo" style={styles.logo} />
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>DocBoyz</Text>
//         </View>
//       </View>

//       {/* Tables Section */}
//       {renderTable('ATM Withdrawals', atmWithdrawl, ['date', 'amount', 'description', 'bank', 'monthAndYear', 'total'])}
//       {renderTable('Average Monthly Balance', averageMonthlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Average Quarterly Balance', averageQuarterlyBalance, ['monthAndYear', 'netAverageBalance'])}
//       {renderTable('Expenses', expenses, ['date', 'description', 'category', 'amount', 'mode'])}
//       {renderTable('High Value Transactions', highValueTransactions, ['date', 'description', 'category', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Incomes', incomes, ['date', 'description', 'mode', 'isSalary', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Minimum Balances', minimumBalances, ['date', 'description', 'transactionType', 'amount', 'balanceAfterTransaction'])}
//       {renderTable('Money Received Transactions', moneyReceivedTransactions, ['date', 'description', 'category', 'transactionType', 'amount', 'balanceAfterTransaction'])}

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         <Text>Zapfin Tekhnologies Pvt. Limited</Text>
//         <Text>(DocBoyz)</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default StatementPDF;
