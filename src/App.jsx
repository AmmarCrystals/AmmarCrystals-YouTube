import React from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import { Provider } from 'react-redux'
import store from './Utils/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPortion from './Components/MainPortion.jsx'
import WatchPage from './Components/WatchPage.jsx'
function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainPortion />
        },
        {
          path: 'Watch',
          element: <WatchPage/>
        }
      ]

    }

  ])

  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>

    </>
  )
}

export default App
