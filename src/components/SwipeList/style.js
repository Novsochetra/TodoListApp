import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Colors from 'src/utils/Colors'

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,

    shadowColor: 'rgba(0,0,0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,

    backgroundColor: Colors.WHITE,
    marginLeft: 15,
    marginRight: 15
  },

  bar: {
    width: 4,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: Colors.YELLOW1,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 20 / 2
  },

  buttonContainer: {
    width: 40,
    height: 60,
    marginRight: 15,
    justifyContent: 'center',
  },

  butttonWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40 / 2
  }
})

export default styles