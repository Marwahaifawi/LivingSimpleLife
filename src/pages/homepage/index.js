 import React from 'react'
 import Header from "../../components/header"
 import MainContent from "../../components/mainHomePageContent"
 import Footer from "../../components/Footer"
 import './index.css'
 const HomePage = () => {
   return (
    <div className='pageContainer'>
    <Header />
    <MainContent/>
    <Footer/>
    </div>
   )
 }
 export default HomePage