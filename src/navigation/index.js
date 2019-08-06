import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'
import WelcomeScreen from 'src/screens/Welcome'
import SplashScreen from 'src/screens/SplashScreen'
import HomeScreen from 'src/screens/Home'

const AppStack = createStackNavigator({ Home: HomeScreen })
const AuthStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  }
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
  }
})

const SwitchNAvigator = createAnimatedSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
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
        <Transition.In type="fade" durationMs={200} />
      </Transition.Together>
    )
  }
)

export default createAppContainer(SwitchNAvigator)