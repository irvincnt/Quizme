import { baseConfig } from '../dictionary/baseConfig'
import { reorder } from '../helpers/general'
import { types } from '../types/types'

const { configInitial } = baseConfig

const initialState = {
  nameSection: 'Titulo de la sección',
  sheets: [],
  loadingEvent: false,
  currentSheet: {
    config: {
      columns: 'cardC2',
      styles: 'cardS2',
      types: configInitial.cardC2.cardS2,
      modifiedType: false,
      colors: 'gray',
      sizes: 'x'
    },
    rows: [
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
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        columnOne: '',
        columnTwo: '',
        columnThree: ''
      }
    ],
    row: {
      id: '',
      columnOne: '',
      columnTwo: '',
      columnThree: ''
    }
  }
}

const clearData = {
  rows: [
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
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      columnOne: '',
      columnTwo: '',
      columnThree: ''
    }
  ]
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
    case types.updateContentSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          rows: state.currentSheet.rows.map(item => item.id === action.payload.row ? action.payload.updatedRow : item)
        }
      }
    case types.addRow: {
      const idRow = Math.floor(Math.random() * Date.now())
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          rows: [...state.currentSheet.rows, { ...state.currentSheet.row, id: idRow }]
        }
      }
    }
    case types.deleteRow:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          rows: state.currentSheet.rows.filter((item) => action.payload !== item.id)
        }
      }
    case types.reOrder:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          rows: reorder(state.currentSheet.rows, action.payload.sourceIndex, action.payload.destinationIndex)
        }
      }
    case types.loadingEvent:
      return {
        ...state,
        loadingEvent: action.payload,
        currentSheet: {
          ...state.currentSheet
        }
      }
    case types.saveSheet:
      return {
        loadingEvent: false,
        sheets: [...state.sheets, action.payload],
        currentSheet: {
          ...state.currentSheet,
          rows: clearData.rows
        }
      }

    default:
      return state
  }
}
