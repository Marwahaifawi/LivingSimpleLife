import React from 'react'
import LifeImage from '../../assets/images/life.jpg'
import ImageInfo from '../imageInfo'
import MainTitle from '../MainTitle'
import Paragraph from '../paragraph'
import SubTitle from '../subTitle'
import './index.css'
const VerticalPosts = () => {
  return (
    <div className="article-featured">
        <img src={LifeImage}/>
        <ImageInfo/>
        <MainTitle/>
        <Paragraph/>
        <SubTitle/>
    </div>
  )
}

export default VerticalPosts