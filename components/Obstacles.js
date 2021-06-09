import React from 'react'
import { View,Image } from 'react-native'
import lightning from '../assets/lightning.gif'

const Obstacles = ({ 
  color, 
  obstaclesLeft,
  obstacleWidth,
  obstacleHeight, 
  gap,
  randomBottom
}) => {
  return (
    <>
    <View  style = {{
      position: 'absolute',
      backgroundColor: color,
      width: obstacleWidth,
      height: obstacleHeight,
      left: obstaclesLeft,
      bottom: randomBottom + obstacleHeight + gap 
    }}>
      <Image source={lightning} style={{
        flex: 1,
        resizeMode: 'repeat',
        justifyContent: 'center'
      }}/>
    </View>
   
   <View  style = {{
     position: 'absolute',
     backgroundColor: color,
     width: obstacleWidth,
     height: obstacleHeight,
     left: obstaclesLeft,
     bottom: randomBottom
   }}>
     <Image source={lightning} style={{
       flex: 1,
       resizeMode: 'repeat',
       justifyContent: 'center'
     }}/>
   </View>
   
   
   
   
   
    </>
  )
}

export default Obstacles
