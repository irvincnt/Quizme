import { reorder } from '../helpers/general'
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
        currentJotting: {
          ...state.currentJotting,
          settings: action.payload
        }
      }
    case types.addJottingTitle:
      return {
        currentJotting: {
          ...state.currentJotting,
          title: action.payload
        }
      }
    case types.updateJottingContent:
      return {
        currentJotting: {
          ...state.currentJotting,
          rows: state.currentJotting.rows.map(item => item.id === action.payload.row ? action.payload.updatedRow : item)
        }
      }
    case types.addJottingRow:
      return {
        currentJotting: {
          ...state.currentJotting,
          rows: [
            ...state.currentJotting.rows,
            {
              id: Math.floor(Math.random() * Date.now()),
              columnOne: '',
              columnTwo: '',
              columnThree: ''
            }
          ]
        }
      }
    case types.deleteJottingRow:
      return {
        currentJotting: {
          ...state.currentJotting,
          rows: state.currentJotting.rows.filter((item) => action.payload !== item.id)
        }
      }
    case types.reOrderJottingRows:
      return {
        currentJotting: {
          ...state.currentJotting,
          rows: reorder(state.currentJotting.rows, action.payload.sourceIndex, action.payload.destinationIndex)
        }
      }

    default:
      return state
  }
}
