import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView } from 'react-native'
import Colors from 'src/utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <LinearGradient
          start={{ x: 0.5, y: 1 }} end={{ x: 0.0, y: 0.1 }}
          locations={[0, 0.1, 1]}
          colors={['#81C7F5', '#85CAF7', '#3867D5']}
          style={{ height: 200, flex: 1 }}
        >

          <View style={styles.profileContainer} >
            <View>
              <Text style={styles.h2} >Hello Brenda! </Text>
              <Text style={{ ...styles.text, color: Colors.WHITE }}>Today you have 9 tasks</Text>
            </View>

            <Image
              source={require('src/assets/images/profile.jpeg')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50 / 2
              }}
            />
          </View >

          <Notification />
        </LinearGradient>
      </SafeAreaView >

    )
  }
}

const Notification = () =>
  <View style={styles.notificationContiner} >
    <View style={styles.profileWrapper} >
      <Image
        source={require("src/assets/icons/close.png")}
        style={styles.profileImage}
      />

      <View style={styles.textContainer} >
        <View>
          <Text style={styles.h1} >Today Reminder </Text>
          <Text style={styles.text} >Metting with client</Text>
          <Text style={styles.text} >13:00 PM</Text>
        </View>
        <Image
          source={require("src/assets/icons/bell.png")}
          style={styles.notificationIcon}
        />
      </View >
    </View>
  </View >
