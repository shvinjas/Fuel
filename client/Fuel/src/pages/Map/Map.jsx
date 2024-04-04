import React from 'react'
import "./Map.Module.css"
import Header from '../../components/shared/Header/Header'
import Footer from '../../components/shared/Footer/Footer'
import MapPage from './MapPage'
import LocationInfo from '../LocationInfo/LocationInfo'
import AddressCard from '../LocationInfo/AddressCard'

const Map = () => {
  return (
    <>
    <Header/>
    <MapPage/>
    {/* <LocationInfo/> */}
    {/* <AddressCard/> */}
    <Footer/>
   
    </>
  )
}

export default Map