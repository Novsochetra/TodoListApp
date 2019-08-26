import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  modalSpaceHeader: {
    backgroundColor: 'rgba(33, 32, 32, 0.2)',
    height: 150,
  },

  container: {
    width: '100%',
    height: 40,
    alignItems: 'center'
  },

  containerBackDrop: {
    width: '100%',
    backgroundColor: 'rgba(33, 32, 32, 0.2)',
    height: 40,
    position: 'absolute'
  },

  curveBox: {
    zIndex: 99,
    width: '20%',
    height: 40,
    alignSelf: 'center',
    borderTopLeftRadius: Dimensions.get('window').width / 2,
    borderTopRightRadius: Dimensions.get('window').width / 2,
    backgroundColor: 'white',
    transform: [
      { scaleX: 5 }
    ]
  },

  buttonSquareWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  textInput: {
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    marginVertical: 10
  }

})

export default styles