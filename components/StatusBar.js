import React from 'react'
import { View ,StyleSheet,Text } from 'react-native'

const StatusBar = ({ score }) => {
  return (
    <View  style = {styles.bar}>
      <Text style={{
        fontSize: 42,
        color: 'green'
      }}> SCORE: {score}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    zIndex: 3,
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  }
  
})
export default StatusBar
