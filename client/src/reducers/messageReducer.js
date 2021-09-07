import { types } from '../types/types'

const initialState = {
  type: null,
  ok: false,
  msg: ''
}
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.messageError:
      return {
        ok: true,
        msg: action.payload.msg,
        type: action.payload.type
      }
    case types.hideMessage:
      return {
        ok: false,
        msg: '',
        type: null
      }

    default:
      return state
  }
}
