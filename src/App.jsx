import React from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import { Provider } from 'react-redux'
import store from './Utils/Store.js'
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>

    </>
  )
}

export default App
