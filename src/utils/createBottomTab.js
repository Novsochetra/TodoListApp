import React, { Component } from 'react'
import { createBottomTabNavigator, BottomTabBar, createStackNavigator } from 'react-navigation'
import { Text, View, Image } from 'react-native'
import Colors from './Colors'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Modal from 'src/components/Modal'

import HomeScreen from 'src/screens/Home'
import TaskScreen from 'src/screens/Task'
import AddTaskScreen from 'src/screens/Task/add'

const BottomTabs = createBottomTabNavigator(
  {
    Task: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => <Text style={{ color: tintColor, textAlign: 'center' }}>Tasks</Text>,
        tabBarIcon: ({ tintColor }) => <Icon name='tasks' size={20} color={tintColor} />
      }
    },

    AddTask: {
      screen: React.Fragment,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarOnPress: ({ navigation }) => navigation.navigate('Modal'),
        tabBarIcon: ({ tintColor }) => <IconPlus />
      }
    },

    Category: {
      screen: TaskScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => <Text style={{ color: tintColor, textAlign: 'center' }}>Category</Text>,
        tabBarIcon: ({ tintColor }) => <Icon name='th' size={20} color={tintColor} />
      }
    }
  },
  {
    initialRouteName: 'Task',
    defaultNavigationOptions: {
      tabBarComponent: props => <TabBarComponent {...props} />,
      tabBarOptions: {
        activeTintColor: Colors.LIGHT_BLUE,
        inactiveTintColor: Colors.LIGHT_GRAY,
      }
    },
  }

)

export default createStackNavigator({
  Home: BottomTabs,
  Modal: Modal
},
  {
    headerMode: 'none',
    mode: 'modal',

    transparentCard: true,
    transitionConfig: () => ({
      screenInterpolator: (sceneProps) => {
        const { position, scene, layout } = sceneProps

        const thisSceneIndex = scene.index
        const height = layout.initHeight


        const translateY = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [height, 0, 0]
        })

        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [0, 1],
        })

        return { transform: [{ translateY }], opacity }
      }
    })
  })

const TabBarComponent = props =>
  <View style={{ backgroundColor: Colors.BACKGROUND }}>
    <BottomTabBar {...props} />
  </View>

const IconPlus = () =>
  <View
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,

      borderRadius: 50 / 2,
      width: 50,
      height: 50,
      bottom: 15,
    }}
  >
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 1]}
      colors={['#F857C3', '#FA5AC5', '#E0139C']}
      style={{
        borderRadius: 50 / 2,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Image
        source={require("src/assets/icons/add.png")}
        style={{
          width: 20,
          height: 20
        }}
      />
    </LinearGradient>
  </View>
