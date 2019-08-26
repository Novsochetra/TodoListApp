import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 7.5,
  },

  row: {
    flex: 1,
    height: 180,
    padding: 7.5,
    flexDirection: 'row'
  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.LIGHT_GRAY2,
  },

  titleWrapper: {
    padding: 15,
    paddingBottom: 10
  },

  item: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',

    // SHADOW IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // SHADOW ANDROID
    elevation: 5,
  },

  imageWrapper: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLabel: {
    marginTop: 10,
    fontWeight: 'bold',
    color: Colors.LIGHT_GRAY3
  },

  buttonSpan: {
    marginTop: 5,
    fontSize: 10,
    color: Colors.LIGHT_GRAY
  }
})

export default styles