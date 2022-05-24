import { types } from '../types/types'

const initialState = {
  checking: true,
  loading: false,
  loadingWith: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoading:
      return {
        ...state,
        checking: false,
        loading: true,
        loadingWith: action.payload
      }
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
        loading: false
      }
    case types.authLogout:
      return {
        checking: false,
        loading: false,
        loadingWith: ''
      }
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
        loading: false,
        loadingWith: ''
      }

    default:
      return state
  }
}
