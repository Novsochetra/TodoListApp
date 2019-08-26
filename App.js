import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './src/navigation/index'
import createStore from 'src/redux/store'

export default () => (
  <Provider store={createStore()}>
    <AppContainer />
  </Provider>
)