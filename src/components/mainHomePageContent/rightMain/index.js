import React from 'react'
import AboutMe from '../../aboutMeCard'
import RecentPosts from '../../recentPostsCard'
import './index.css'
const RightMain = () => {
  return (
    <div className='rightMainContainer'>
      <AboutMe />
      <RecentPosts />
      </div>

  )
}

export default RightMain