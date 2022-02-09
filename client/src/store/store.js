import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/authReducer'
import { messageReducer } from '../reducers/messageReducer'
import thunk from 'redux-thunk'
import { sheetReducer } from '../reducers/sheetReducer'
import { jottingReducer } from '../reducers/jottingReducer'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const reducers = combineReducers({
  auth: authReducer,
  msg: messageReducer,
  sheet: sheetReducer,
  jotting: jottingReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
