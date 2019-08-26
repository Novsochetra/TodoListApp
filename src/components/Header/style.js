import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Colors from 'src/utils/Colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: 'white',
    borderTopColor: Colors.LIGHT_GRAY,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  profileWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    height: '100%',
    borderRadius: 5
  },

  profileImage: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: 10,
    right: 10
  },

  profileContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    padding: 15
  },

  notificationContiner: {
    flex: 1,
    flexBasis: 100,
    padding: 15
  },

  textContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    padding: 15
  },

  text: {
    fontSize: 11,
    color: Colors.TEXT_LIGHT_GRAY
  },

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE
  },

  h2: {
    fontSize: 17,
    color: Colors.WHITE
  },

  notificationIcon: {
    width: 50,
    height: 50,
    marginRight: 15
  }

})

export default styles