import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 50,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    top: -25,
  },

  button: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },


})

export default gradientButton = props =>
  <TouchableOpacity
    style={styles.buttonWrapper}
    activeOpacity={0.8}
    onPress={props.onPress()}
  >
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 1]}
      colors={['#F857C3', '#FA5AC5', '#E0139C']}
      style={[styles.button, props.style]}
    >

      <Image
        source={require("src/assets/icons/add.png")}
        style={{
          width: 20,
          height: 20
        }}
      />
    </LinearGradient>
  </TouchableOpacity>
