import React from 'react'
// eslint-disable-next-line no-unused-vars
import { View,ImageBackground,StyleSheet, Image } from 'react-native'
import millenniumFalcon from '../assets/MF.png'

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 90 
  const birdHeight = 60


  return (
  // <View style={{
  //   position: 'absolute',
  //   backgroundColor: 'blue',
  //   width: birdWidth,
  //   height: birdHeight,
  //   left: birdLeft - (birdWidth / 2),
  //   bottom: birdBottom - (birdHeight / 2)
      
  // }}>
  // </View>

    <View style={{ 
      position: 'absolute',
      // backgroundColor: 'blue',
      width: birdWidth,
      height: birdHeight,
      left: birdLeft - (birdWidth / 2),
      bottom: birdBottom - (birdHeight / 2)
    }}>
      <Image source={millenniumFalcon} style={styles.image}>
      </Image>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
})


export default Bird
