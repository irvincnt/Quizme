import { types } from '../types/types'

const initialState = {
  currentJotting: {
    title: '',
    // favorite: false
    settings: {
      design: '',
      columns: '',
      columnsType: '',
      color: '',
      size: ''
    },
    rows: [{
      id: Math.floor(Math.random() * Date.now()),
      columnOne: '',
      columnTwo: '',
      columnThree: ''
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      columnOne: '',
      columnTwo: '',
      columnThree: ''
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      columnOne: '',
      columnTwo: '',
      columnThree: ''
    }]
  }
}

export const jottingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addJottingSetting:
      return {
        ...state,
        currentJotting: {
          ...state.currentJotting,
          settings: action.payload
        }
      }
    default:
      return state
  }
}
