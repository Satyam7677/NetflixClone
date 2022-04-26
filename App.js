import React from 'react'
import {View, Text,SafeAreaView} from 'react-native'
import {PersistGate} from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {store,persistor} from './src/reducer/store'
import Router from './src/modules'

const App = ()=>{

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router/>
      </PersistGate>
    </Provider>
  )
}
export default App
