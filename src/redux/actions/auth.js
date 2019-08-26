import { Alert } from 'react-native'
import axios from 'axios'
import NetInfo from "@react-native-community/netinfo"
import { AUTH_TYPES } from '../types'

authRequest = () => ({
  type: AUTH_TYPES.AUTH_REQUEST
})

authSuccess = data => ({
  type: AUTH_TYPES.AUTH_SUCCESS,
  data
})

authFail = error => ({
  type: AUTH_TYPES.AUTH_FAIL,
  error
})

export const login = (credentail, onLoginSuccess) => {
  return async (dispatch, getState) => {
    try {
      const { isConnected } = await NetInfo.fetch()
      const endpoint = 'endpoint'

      if (!isConnected) {
        Alert.alert("No internet connection", "It seems you don't have internet connection.")
        return
      }

      dispatch(authRequest())
      const response = await axios.post(endpoint, credentail)

      dispatch(authSuccess(response.data))
      onLoginSuccess()
    } catch (error) {
      dispatch(authFail('Invalid credentail'))
    }
  }
}

export const register = (params, onRegisterSuccess) => {
  return async (dispatch, getState) => {
    try {
      const { isConnected } = await NetInfo.fetch()
      const endpoint = ''

      if (!isConnected) {
        Alert.alert("No internet connection", "It seems you don't have internet connection.")
        return
      }

      dispatch(authRequest())
      const response = await axios.post(endpoint, params)

      dispatch(authSuccess(response.data))
      onRegisterSuccess()
    } catch (error) {
      dispatch(authFail(error))
    }
  }
}

export const logout = onLogoutSuccess => {
  return async (dispatch, getState) => {
    try {
      const { isConnected } = await NetInfo.fetch()
      const endpoint = ''

      if (!isConnected) {
        Alert.alert("No internet connection", "It seems you don't have internet connection.")
        return
      }

      dispatch(authRequest())
      await axios.delete(endpoint)
      dispatch(authSuccess(null))
      onLogoutSuccess()
    } catch (error) {
      dispatch(authFail(error))
    }
  }
}