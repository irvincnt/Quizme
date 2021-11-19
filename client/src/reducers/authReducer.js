import { types } from '../types/types'

const initialState = {
  checking: true,
  loading: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoading:
      return {
        ...state,
        checking: false,
        loading: true
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
        loading: false
      }
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
        loading: false
      }

    default:
      return state
  }
}
