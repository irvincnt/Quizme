import { baseConfig } from '../dictionary/baseConfig'
import { types } from '../types/types'

const { configInitial } = baseConfig

const initialState = {
  nameSection: 'Titulo de la sección',
  sheets: [],
  currentSheet: {
    id: '',
    config: {
      columns: 'cardC2',
      styles: 'cardS2',
      types: configInitial['cardC2']['cardS2'],
      modifiedType: false,
      colors: 'gray',
      sizes: 'x'
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
