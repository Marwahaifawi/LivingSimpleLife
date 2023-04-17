import React from 'react'
import LifeImage from '../../assets/images/life.jpg'
import ImageInfo from '../imageInfo'
import MainTitle from '../mainTitle'
import Paragraph from '../paragraph'
import SubTitle from '../subTitle'
import './index.css'
const VerticalPosts = () => {
  return (
    <div className="articleFeatured">
        <img src={LifeImage} alt='life'/>
        <ImageInfo/>
        <MainTitle/>
        <Paragraph/>
        <SubTitle/>
    </div>
  )
}

export default VerticalPosts