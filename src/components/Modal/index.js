import React, { Component } from 'react'
import DatePicker from 'react-native-date-picker'
import LinearGradient from 'react-native-linear-gradient'

import {
  Text,
  View,
  Image,
  Animated,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import Tag from 'src/components/Tag'
import { GradientButton } from 'src/components/Button'

import styles from './style'
import Colors from 'src/utils/Colors'
import { _fade } from 'src/utils/animation'
import { connect } from 'react-redux'
import { getCategories } from 'src/redux/actions/database'

class index extends Component {
  state = {
    opacityValue: new Animated.Value(0),
    date: new Date()
  }

  async componentDidMount() {
    await this.props.getCategories()
    console.log('the props is ', this.props);
    this._handleOpenModal()
  }

  _handleOpenModal = () => {
    const startValue = this.state.opacityValue
    _fade(startValue, 1)
  }

  handleCloseModal = () => {
    const startValue = this.state.opacityValue
    _fade(startValue, 0, () => this.props.navigation.goBack());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={[{ opacity: this.state.opacityValue }, styles.modalSpaceHeader]} />
        <View style={styles.container}>
          <Animated.View style={[styles.containerBackDrop, { opacity: this.state.opacityValue }]} />
          <View style={styles.curveBox} />
          <GradientButton
            onPress={() => this.handleCloseModal}
            style={{
              transform: [{ rotateZ: "45deg" }]
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 15,
          }}
        >
          <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Add New Task</Text>
          <TextInput placeholder='Name' style={styles.textInput} />

          <View style={{ height: 65, }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Tag
                label='Personal'
                bgColor={Colors.TASK_YELLOW}
              />

              <Tag
                label='Work'
                bgColor={Colors.TASK_GREEN}
              />

              <Tag
                label='Meeting'
                bgColor={Colors.PURPLE}
              />

              <Tag
                label='Study'
                bgColor={Colors.PURPLE}
              />
            </ScrollView>
          </View>

          <View style={{ alignItems: 'center' }}>
            <DatePicker
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
            />
          </View>

          <View style={{ height: 50 }} >
            <AddButton onPress={() => this.handleCloseModal} />
          </View>

        </View>

      </View >
    )
  }
}

const mapStateTopProps = state => ({
  database: state.database
})

export default connect(mapStateTopProps, { getCategories })(index)

const AddButton = props =>
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress()}
  >
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.25, 0.5, 0.75, 1]}
      colors={['#7EB6FF', '#79AEFB', '#6F9FF3', '#6793ED', '#5F87E7']}
      style={styles.buttonSquareWrapper}
    >
      <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>Add Task</Text>
    </LinearGradient>
  </TouchableOpacity>

