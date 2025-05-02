import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Define styles for the PDF document
const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 160,
    height: 60,
    marginRight: 20,
  },
  title: {
    color: '#5A5A5A',
    fontSize: 15,
    // textAlign: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  dataField: {
    color: '#5A5A5A',
    fontSize: 11,
    marginBottom: 5,
  },
  tdStyle: {
    color: '#8B0000',
    fontStyle: 'italic',
  },
  tdElements: {
    color: '#5A5A5A',
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },
  table: {
    width: '100%',
    marginBottom: 20,
    borderCollapse: 'collapse',
  },
  dataTitle: {
    backgroundColor: '#8B0000',
    color: '#FFFFFF',
    height: 30,
    textAlign: 'center',
    fontSize: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #ccc',
  },
  tableCell: {
    flex: 1,
    textTransform: 'uppercase',
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  reportStatus: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
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
});

// Define the PDF component
const EquifaxPdfReportError = ({ equifaxDetails, panNum }) => {
  return (
    <Document>
      <Page size={[1000, 1080]} style={styles.container}>
        <View style={styles.header}>
          <Image src="/logo/equifax-logo.jpg" style={styles.logo} />
          <Text style={styles.title}>CONSUMER CREDIT REPORT V2.0</Text>
        </View>

        <View>
          <Text style={styles.dataField}>
            <Text style={styles.tdStyle}>CLIENT ID:</Text> {equifaxDetails?.message?.InquiryResponseHeader?.ClientID || ""}
          </Text>
          <Text style={styles.dataField}>
            <Text style={styles.tdStyle}>DATE:</Text> {equifaxDetails?.message?.InquiryResponseHeader?.Date || ""}
          </Text>
          <Text style={styles.dataField}>
            <Text style={styles.tdStyle}>REPORT ORDER NO:</Text> ""
          </Text>
          <Text style={styles.dataField}>
            <Text style={styles.tdStyle}>TIME:</Text> {equifaxDetails?.message?.InquiryResponseHeader?.Time || ""}
          </Text>
          <Text style={styles.dataField}>
            <Text style={styles.tdStyle}>REFERENCE NUMBER:</Text> {equifaxDetails?.message?.InquiryResponseHeader?.CustRefField || ""}
          </Text>

          {/* <Text style={styles.title}>Consumer Information</Text> */}
          <View style={[styles.tableRow, styles.dataTitle]}>
              <Text style={styles.tableCell} colSpan={3}>Consumer Information</Text>
            </View>
          <Text style={styles.dataField}>
            Consumer Name: {equifaxDetails?.message?.InquiryRequestInfo?.FirstName} {equifaxDetails?.message?.InquiryRequestInfo?.LastName}
          </Text>
          <Text style={styles.dataField}>
            Mobile: {equifaxDetails?.message?.InquiryRequestInfo?.InquiryPhones[0]?.Number || ""}
          </Text>

          <View style={styles.table}>
            <View style={[styles.tableRow, styles.dataTitle]}>
              <Text style={styles.tableCell}>Personal Information</Text>
              <Text style={styles.tableCell}>Identification</Text>
              <Text style={styles.tableCell}>Contact Details</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Previous Name:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>PAN:</Text> {panNum || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Home:</Text> {equifaxDetails?.message?.InquiryRequestInfo?.InquiryPhones[0]?.Number || ""}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Alias Name:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Voter ID:</Text> {equifaxDetails?.VoterID || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Office:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>DOB:</Text> {equifaxDetails?.DOB || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Passport ID:</Text> {equifaxDetails?.NationalIDCard || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Mobile:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Age:</Text> {equifaxDetails?.age || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>UID:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Alt. Home/Other No.:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Gender:</Text> {equifaxDetails?.gender || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Driver's License:</Text> {equifaxDetails?.driving_licence || ""}</Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Alt. Office:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Total Income:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Ration Card:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Alt. Mobile:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Occupation:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Photo Credit Card:</Text></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>Email:</Text></Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCell}><Text style={styles.tdElements}>ID - Other:</Text></Text>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={[styles.tableRow, styles.dataTitle]}>
              <Text style={styles.tableCell} colSpan={3}>Report Status</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.reportStatus} colSpan={3}>
                Consumer not found in bureau
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text>Zapfin Tekhnologies Pvt. Limited</Text>
          <Text>(DocBoyz)</Text>
        </View>
      </Page>
    </Document>
  );
};

export default EquifaxPdfReportError;
