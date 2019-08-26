import React from 'react'
import { Text, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'
import WelcomeScreen from 'src/screens/Welcome'
import SplashScreen from 'src/screens/SplashScreen'
import HomeScreen from 'src/screens/Home'
import TaskScreen from 'src/screens/Task'
import Colors from 'src/utils/Colors'
import CustomBottomNavigation from 'src/utils/createBottomTab'

const AppStack = CustomBottomNavigation

const SwitchNavigator = createAnimatedSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'SplashScreen',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={100}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={200} />
      </Transition.Together>
    )
  }
)

export default createAppContainer(SwitchNavigator)