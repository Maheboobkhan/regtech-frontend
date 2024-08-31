import React from 'react'
import Navbar from '../components/Header'
import HeroSections from '../components/HeroSections'
import Footer from '../components/Footer'
import CustomerVerification from './CustomerVerification'
import BankAccountVerification from './BankAccountVerification'
import EKyc from './EKyc'
import CustomerAcquisition from '../components/CustomerAcquisition'
import VehicleVerification from '../components/VehicleVerification'
import Company from './TrustedByBrands'

class Home extends React.Component {
  componentDidMount() {
    // Scroll to the top of the page when this component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className='overflow-x-hidden' style={{overflow: 'hidden'}}>
        {/* <Navbar /> */}
        <HeroSections />
        {/* <CustomerVerification /> */}
        {/* <BankAccountVerification /> */}
        {/* <EKyc /> */}
        <Company />
        <CustomerAcquisition />
        <VehicleVerification />
      </div>
    )
  }
}

export default Home