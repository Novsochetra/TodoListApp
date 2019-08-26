import React, { Component, Fragment } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import Header from 'src/components/Header'
import styles from './style'

export default class index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Categories</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.row}>
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/user.png')}
                label='Personal'
                span='24 Task'
                iconWidth={28}
                iconHeight={33}
                backgroundColor='rgba(255, 238, 155, 0.36)'
              />
            </View>
            <Space />
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/briefcase.png')}
                label='Work'
                span='24 Task'
                iconWidth={28}
                iconHeight={25}
                backgroundColor='rgba(181, 255, 155, 0.36)'
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/presentation.png')}
                label='Meeting'
                span='24 Task'
                iconWidth={28}
                iconHeight={35}
                backgroundColor='rgba(255, 155, 205, 0.36)'
              />
            </View>
            <Space />
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/shopping-basket.png')}
                label='Shopping'
                span='24 Task'
                iconWidth={30}
                iconHeight={25}
                backgroundColor='rgba(255, 208, 155, 0.36)'
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/confetti.png')}
                label='Party'
                span='24 Task'
                iconWidth={30}
                iconHeight={30}
                backgroundColor='rgba(55, 208, 197, 0.36)'
              />
            </View>
            <Space />
            <View style={styles.item}>
              <ButtonWithIcon
                icon={require('src/assets/icons/molecule.png')}
                label='Study'
                span='24 Task'
                iconWidth={28}
                iconHeight={28}
                backgroundColor='rgba(245, 155, 255, 0.36)'
              />
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const Space = () =>
  <View style={{ width: 15 }}></View>

const ButtonWithIcon = (props) =>
  <Fragment>
    <View style={[styles.imageWrapper, { backgroundColor: props.backgroundColor }]}>
      <Image
        source={props.icon}
        style={{
          width: props.iconWidth,
          height: props.iconHeight
        }}
      />
    </View>
    <Text style={styles.buttonLabel}>{props.label}</Text>
    <Text style={styles.buttonSpan}>{props.span}</Text>
  </Fragment>