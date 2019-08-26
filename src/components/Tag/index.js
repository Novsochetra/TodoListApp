import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'
import Colors from 'src/utils/Colors'

export default class index extends Component {
  state = {
    active: false
  }

  handleToggleButton = () => {
    const active = !this.state.active

    this.setState({ active })
    this._updateStyle(active)
  }

  _updateStyle = (active) => {
    if (active)
      this.refs['tag'].setNativeProps({
        style: {
          backgroundColor: 'red'
        }
      })
    else
      this.refs['tag'].setNativeProps({
        style: {
          backgroundColor: Colors.WHITE
        }
      })
  }

  render() {
    return (
      <TouchableOpacity ref="tag" style={[styles.tagWrapper, this.props.style]} onPress={() => this.handleToggleButton()}>
        <View style={[styles.tagDot, { backgroundColor: this.props.bgColor }]} />
        <View style={[styles.space]} />
        <Text style={styles.tagLabel}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}
