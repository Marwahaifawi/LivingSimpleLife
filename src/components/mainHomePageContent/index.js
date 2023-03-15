import React from 'react'
import LeftMain from './leftMain'
import RightMain from './rightMain'
import './index.css'
const MainContent = () => {
  return (
    <div className='mainContainer'>
    <LeftMain />
    <RightMain />
    </div>
  )
}

export default MainContent