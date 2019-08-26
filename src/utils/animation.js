import { Animated, Easing } from 'react-native'

export const _fade = (startValue, endValue, callback = null) => {
  const duration = startValue._value > endValue ? 100 : 1000

  Animated.timing(
    startValue,
    {
      toValue: endValue,
      duration,
      easing: Easing.linear
    },
  ).start(callback);
}