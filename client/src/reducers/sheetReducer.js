import { types } from '../types/types'

const initialState = {
  nameSection: '',
  sheets: [
    {
      id: '01',
      config: {
        columns: 'cardC2',
        styles: 'cardS1',
        types: '',
        colors: 'dark',
        sizes: '2x'
      },
      rows: {},
      row: {}
    }
  ]
}

export const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newChartSheet:
      return {
        nameSection: action.payload,
        ...state
      }

    default:
      return state
  }
}
