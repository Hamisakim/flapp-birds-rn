import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'

const App = () => {

  const screenWidth  = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2 
  console.log('🐝 ~ birdLeft', birdLeft)
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  console.log('🐝 ~ birdBottom', birdBottom)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  console.log('🐝 ~ obstaclesLeft', obstaclesLeft)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  console.log('🐝 ~ obstaclesLeftTwo', obstaclesLeftTwo)

  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)

  const obstacleWidth = 60 
  const obstacleHeight = 300
  const gap = 200
  const gravity = 3 
  let gameTimerId 
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo
  const [isGameOver, setIsGameOver] = useState(false)

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

  ///Jump function 
  const jump = () => {
    if (!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom=> birdBottom + 50)
      console.log('jumped 🟩')
    }



  }



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
      setObstaclesNegHeight( - Math.random() * 100)

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
      setObstaclesNegHeightTwo( - Math.random() * 100)
    }
  }, [obstaclesLeftTwo]) 


  /// Check for collisions
  useEffect(() => {
    if 
    (
      (birdBottom < (obstaclesNegHeight + obstacleHeight + 30)  || 
    birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30 )) &&
    (obstaclesLeft > screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30 )
    ||
    (birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30)  || 
    birdBottom > (obstaclesNegHeightTwo + obstacleHeight - 30 + gap)) &&
    (obstaclesLeftTwo > screenWidth / 2 - 30 && obstaclesLeftTwo < screenWidth / 2 + 30 )
    ) {
      console.log('🐝 ~ screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30 ', screenWidth / 2 + 30 )
      console.log('Game over 🔴')
      gameOver()
    }
  })


  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
    setIsGameOver(true)
  }


  return (
    
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <Bird 
          birdBottom={birdBottom}
          birdLeft={birdLeft}
        />
        <Obstacles 
          color={'orange'}
          obstacleWidth={obstacleWidth} 
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegHeight}
          obstaclesLeft={obstaclesLeft} 
          gap={gap}
        />
        <Obstacles 
          color={'yellow'}
          obstacleWidth={obstacleWidth} 
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegHeightTwo}

          obstaclesLeft={obstaclesLeftTwo} 
          gap={gap}
        />
      </View>
    </TouchableWithoutFeedback>
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
