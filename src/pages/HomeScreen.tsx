import React from 'react'
import Sider from '../components/block/Sider'
import YouTube from './YouTube'


const HomeScreen = () => {
  return (
    <div style={{display:"flex"}}>
      <Sider />
      <YouTube />
    </div>
  )
}

export default HomeScreen