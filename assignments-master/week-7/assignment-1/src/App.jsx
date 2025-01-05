import React from 'react'
import './App.css'

function App() {
  return (
    <div className='profileCard'>
      <div className='background'></div>
      <div className='profileContent'>
        <img src="https://pbs.twimg.com/profile_images/1721218754967994368/4yxEx0v5_400x400.jpg" alt="Profile" className='profilePic' />
        <h2 className='name'> Syed GM Ibrahim <span className='age'>20</span></h2>
        <p className='location'>Vellore</p>
        <div className='stats'>
          <div className='stat'>
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          <div className='stat'>
            <h3>803K</h3>
            <p>Likes</p>
          </div>
          <div className='stat'>
            <h3>1.4K</h3>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
