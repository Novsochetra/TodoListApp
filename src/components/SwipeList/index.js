import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from 'src/utils/Colors'
import styles from './style';

export default class defaultList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
      isShowNotification: true,
      iconNotifcationName: 'bell'
    }
  }

  handleToggleCheckbox = () => {
    isChecked = !this.state.isChecked

    this.setState({ isChecked })

    this._handleUpdateCheckboxBgColor(isChecked)
  }

  handleToggleNotification = () => {
    isShowNotification = !this.state.isShowNotification

    this.setState({
      isShowNotification,
      iconNotifcationName: isShowNotification ? 'bell' : 'bell-slash'
    })
  }

  _handleUpdateCheckboxBgColor = isChecked => {
    if (isChecked)
      this.refs["checkbox"].setNativeProps({
        style: {
          backgroundColor: '#FFD506',
          borderColor: Colors.TASK_YELLOW
        }
      })
    else
      this.refs["checkbox"].setNativeProps({
        style: {
          backgroundColor: Colors.WHITE,
          borderColor: Colors.LIGHT_GRAY,
        }
      })
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={this.handleToggleCheckbox}
          activeOpacity={0.7}
          style={{ ...styles.container, width: this.props.width }}
        >
          <View style={styles.bar} />

          <View style={styles.checkbox} ref={"checkbox"} >
            {this.state.isChecked && <Icon name='check' size={15} color={Colors.WHITE} />}
          </View>

          <Text style={{ color: Colors.LIGHT_GRAY, marginLeft: 10 }} >07: 00 AM</Text>
          <Text style={{ color: Colors.PURPLE, fontWeight: 'bold', flex: 1, marginLeft: 10, fontSize: 16 }} > Go jogging with Christin </Text>

        </TouchableOpacity>

        <NotificationButton
          onPress={this.handleToggleNotification}
          iconNotifcationName={this.state.iconNotifcationName}
        />

        <DeleteButton onPress={this.handleToggleNotification} />

      </React.Fragment>
    )
  }
}

const NotificationButton = props =>
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={styles.buttonContainer}
  >
    <View style={{ backgroundColor: 'rgba(255, 238, 155, 0.36)', ...styles.butttonWrapper }}>
      <Icon
        name={props.iconNotifcationName}
        size={20}
        color={Colors.TASK_YELLOW}
      />
    </View>
  </TouchableOpacity>

const DeleteButton = props =>
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={styles.buttonContainer}
  >
    <View style={{ backgroundColor: '#FFCFCF', ...styles.butttonWrapper }}>
      <Icon
        name='trash-alt'
        size={17}
        color={Colors.TASK_RED}
      />
    </View>
  </TouchableOpacity>
