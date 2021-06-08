import React from 'react'
import { View } from 'react-native'

const Obstacles = ({ color, obstaclesLeft,obstacleWidth,obstacleHeight, gap }) => {

  
  return (
    <>
    <View  style = {{
      position: 'absolute',
      backgroundColor: color,
      width: obstacleWidth,
      height: obstacleHeight,
      left: obstaclesLeft,
      bottom: 0 + obstacleHeight + gap 
    }}/>
   
   <View  style = {{
     position: 'absolute',
     backgroundColor: color,
     width: obstacleWidth,
     height: obstacleHeight,
     left: obstaclesLeft,
     bottom: 0
   }}/>
   
   
   
   
   
   
    </>
  )
}

export default Obstacles
