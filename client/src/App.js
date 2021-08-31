import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/appRouter'
import { store } from './store/store'

function App () {
  return (
    <div className='app'>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
