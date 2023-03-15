import React from 'react'
// import Separator from '../../separator'
import VerticalPosts from '../../verticalPosts'
import HorizontalPosts from '../../horizontalPosts'
import './index.css'
const LeftMain = () => {
  return (
    <div className='leftMainContainer'>
      <VerticalPosts/>
      {/* <Separator/> */}
     {
      [1,2,3].map((item , index) =><HorizontalPosts key={index}/>)
     } 

    </div>
  )
}

export default LeftMain