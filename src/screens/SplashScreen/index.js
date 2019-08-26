import React, { Component } from 'react'
import { Text, View, Image, Button, StyleSheet } from 'react-native'
import Colors from 'src/utils/Colors'

export default class index extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("App"), 1000)
  }

  render() {
    var styles = StyleSheet.create({
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          source={require('src/assets/images/Logo.png')}
          style={{
            width: 250,
            height: 250
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.PURPLE,
            marginBottom: 20
          }}
        >
          Reminders Made Simple
        </Text>

        <Text
          style={{
            color: Colors.PURPLE,
            fontSize: 15
          }}
        >
          Lorem ipsum dolor sit amet,
        </Text>
        <Text
          style={{
            color: Colors.PURPLE,
            fontSize: 15
          }}
        >
          consectetur adipiscing elit. Mauris
        </Text>
        <Text
          style={{
            color: Colors.PURPLE,
            fontSize: 15
          }}
        >
          pellentesque erat in blandit luctus.
        </Text>

      </View>
    )
  }
}
