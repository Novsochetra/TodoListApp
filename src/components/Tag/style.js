import Colors from 'src/utils/Colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tagWrapper: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 5,
  },

  tagDot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },

  space: {
    width: 5
  },

  tagLabel: {
    color: Colors.LIGHT_GRAY,
    fontWeight: 'bold',
  }
})

export default styles