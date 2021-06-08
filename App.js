import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'

const App = () => {

  const screenWidth  = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2 
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2)
  const obstacleWidth = 60 
  const obstacleHeight = 300
  const gap = 200
  const gravity = 3 
  let gameTimerId 
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo


  /// start the birds falling
  useEffect(() => {
    if (birdBottom > 0 ){
      gameTimerId = setInterval(() => { /// every 30ms to mimic gravity 
        setBirdBottom(birdBottom => birdBottom - gravity )
      }, 30)
      return () =>{
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])


  /// Start first obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth){
      obstaclesLeftTimerId = setInterval(()=>{
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5 )
      },30)
      return () => { 
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
    }
  }, [obstaclesLeft]) 

  /// Start second obstacles
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth){
      obstaclesLeftTimerIdTwo = setInterval(()=>{
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5 )
      },30)
      return () => { 
        clearInterval(obstaclesLeftTimerIdTwo)
      }
    } else {
      setObstaclesLeftTwo(screenWidth)
    }
  }, [obstaclesLeftTwo]) 

  return (
    <>
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles 
        color={'orange'}
        obstacleWidth={obstacleWidth} 
        obstacleHeight={obstacleHeight}
        obstaclesLeft={obstaclesLeft} 
        gap={gap}
      />
      <Obstacles 
        color={'yellow'}
        obstacleWidth={obstacleWidth} 
        obstacleHeight={obstacleHeight}
        obstaclesLeft={obstaclesLeftTwo} 
        gap={gap}
      />
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default App
