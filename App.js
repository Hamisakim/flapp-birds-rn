import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback, Text,ImageBackground } from 'react-native'
// import { NavigationEvents } from 'react-navigation'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'
import spaceBG from './assets/spaceBG.jpeg'
import StatusBar from './components/StatusBar'



const App = () => {
  //#region  //*Variables
  const screenWidth  = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2 
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const obstacleWidth = 60 
  const obstacleHeight = 300
  const gap = 200
  const gravity = 3 
  let gameTimerId 
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo
  //#endregion
  
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
      setScore(score => score + 1 )
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
      setScore(score => score + 1 )
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


  const refreshPage = () => {
    console.log('refresh 💜')
    

  }
  return (
    <ImageBackground source={spaceBG} style={styles.backgroundImage}>
      <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>
          <StatusBar score={score}/>
          {isGameOver && 
          <View style={{
            zIndex: 3,
            backgroundColor: '#786766'
          }}>
            <Text onPress={refreshPage} style={{
              zIndex: 3,
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold'
            }}>
            Oh no you are dead. your score was {score}.
              press here to restart
            </Text>
          </View>}
          


          <Bird 
            birdBottom={birdBottom}
            birdLeft={birdLeft}
          />
          <Obstacles 
            // color={'orange'}
            obstacleWidth={obstacleWidth} 
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeight}
            obstaclesLeft={obstaclesLeft} 
            gap={gap}
          />
          <Obstacles 
            // color={'yellow'}
            obstacleWidth={obstacleWidth} 
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeightTwo}

            obstaclesLeft={obstaclesLeftTwo} 
            gap={gap}
          />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  
  }
})



export default App
