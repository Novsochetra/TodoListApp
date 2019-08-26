import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, PanResponder, TouchableOpacity, Dimensions, Modal } from 'react-native'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      // onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        console.log(dx);
        if (dx > 2 || dx < -2 || dy > 5 || dy < -5)
          return true;

        return false
      },
      onPanResponderMove: (evt, gestureState) => {
        this.onMoveX(gestureState.dx);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // this.onPanResponderRelease(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // this.onPanResponderRelease(gestureState);
      }
    })
  }

  onMoveX = dx => {
    this.refs['task'].setNativeProps({
      style: { transform: [{ translateX: dx }] }
    });
  }

  onPanResponderRelease = gestureState => {
    const halfWindowWidth = Dimensions.get('window').width / 2
    if (Math.abs(gestureState.dx) < halfWindowWidth)
      this.refs['task'].setNativeProps({ style: { transform: [{ translateX: 0 }] } })

    if (Math.abs(gestureState.dx) >= halfWindowWidth)
      this.refs['task'].setNativeProps({ style: { transform: [{ translateX: halfWindowWidth * 2 }] } })
  }

  render() {
    return (
      <View>
        <View style={styles.absolute}>
          <Text style={[styles.text, { marginHorizontal: 10 }]}> DELETE </Text>
          <Text style={[styles.text, { marginHorizontal: 10 }]}> DELETE </Text>
        </View>

        <Animated.View style={styles.item} ref='task' {...this.panResponder.panHandlers} >
          <Text style={[styles.text, { flex: 1 }]}>Item 1</Text>
          <TouchableOpacity>

            <View style={styles.menu}></View>
            <View style={styles.menu}></View>
            <View style={styles.menu}></View>
          </TouchableOpacity>
        </Animated.View>

        {/* <Animated.View style={styles.item} ref='task_y' {...this.panResponder.panHandlers} >
          <Text style={[styles.text, { flex: 1 }]}>Item 1</Text>
          <TouchableOpacity>

            <View style={styles.menu}></View>
            <View style={styles.menu}></View>
            <View style={styles.menu}></View>
          </TouchableOpacity>
        </Animated.View> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  menu: {
    width: 20,
    height: 2,
    backgroundColor: 'silver',
    margin: 2,
    marginHorizontal: 10,
    borderRadius: 3
  }
})