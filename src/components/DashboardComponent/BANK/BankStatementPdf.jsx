import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#C0C0C0',
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
    fontSize: 9,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableCell: {
    border: '1pt solid gray',
    padding: 3,
    textAlign: 'center',
    flex: 1,
    fontSize: 8, // Smaller font size for better fitting
  },
  breakPage: {
    pageBreakBefore: 'always',
  },
});

// Utility function for rendering tables with page break
const renderTable = (header, data, columns) => (
  <View style={[styles.panel, styles.breakPage]}>
    <Text style={{ marginBottom: 10, fontWeight: 'bold', borderBottom: '1px solid gray', fontSize: 12 }}>
      {header}
    </Text>
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* {columns.map((col, index) => (
          <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
            {col === 'dateTime' ? 'Date' || 'description' ? 'Description' || 'type' ? 'Type' || 'amount' ? 'Amount' || 'balanceAfterTransaction' ? 'Balance'}
          </Text>
        ))} */}
        {columns.map((col, index) => {
  let headerText;

  switch (col) {
    case 'dateTime':
      headerText = 'Date';
      break;
    case 'description':
      headerText = 'Description';
      break;
    case 'type':
      headerText = 'Type';
      break;
    case 'amount':
      headerText = 'Amount';
      break;
    case 'balanceAfterTransaction':
      headerText = 'Balance';
      break;
    default:
      headerText = col; // Default to the column name if it doesn't match
  }

  return (
    <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
      {headerText}
    </Text>
  );
})}
      </View>
      {data.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          {columns.map((col, idx) => (
            <Text style={styles.tableCell} key={idx}>
              {item[col] !== undefined ? item[col] : ''}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
);

const BankStatementPDF = ({ 
    bankStatement,  
}) => (
  <Document>
    <Page size={[800, 1080]} style={styles.page}> {/* Adjust size here */}
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image src="/logo/logo4.png" alt="Regtech Logo Logo" style={styles.logo} />
          <Image src="/logo/logo3.png" alt="Regtech Logo Logo" style={styles.logo2} />
        </View>
      </View>

      {/* Tables Section */}
      {renderTable('Bank Statement', bankStatement, ['dateTime', 'description', 'category', 'type', 'amount', 'balanceAfterTransaction'])}

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Zapfin Tekhnologies Pvt. Limited</Text>
        <Text>(DocBoyz)</Text>
      </View>
    </Page>
  </Document>
);

export default BankStatementPDF;