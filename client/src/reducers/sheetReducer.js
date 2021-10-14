import { types } from '../types/types'

const initialState = {
  nameSection: 'Titulo de la sección',
  sheets: [],
  currentSheet: {
    id: '',
    config: {
      columns: 'cardC2',
      styles: 'cardS1',
      types: '',
      colors: 'dark',
      sizes: '3x'
    },
    rows: {}
  }
}

export const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setTitleChartSheet:
      return {
        ...state,
        nameSection: action.payload
      }
    case types.setConfigSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          config: action.payload
        }
      }

    default:
      return state
  }
}
