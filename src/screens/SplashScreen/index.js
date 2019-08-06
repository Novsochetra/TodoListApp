import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class index extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("Auth"), 2000)
  }

  render() {
    return (
      <View>
        <Text> Splash Screen </Text>
      </View>
    )
  }
}
