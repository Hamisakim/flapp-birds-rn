import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Bird from './components/Bird'

const App = () => {

  const screenWidth  = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  
  console.log('🐝 ~ screenWidth', screenWidth)
  console.log('🐝 ~ screenHeight', screenHeight)




  return (
    <View style={styles.container}>
      <Bird/>
    </View>
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
