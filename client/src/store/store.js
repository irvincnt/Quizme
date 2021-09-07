import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/authReducer'
import { messageReducer } from '../reducers/messageReducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const reducers = combineReducers({
  auth: authReducer,
  msg: messageReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
