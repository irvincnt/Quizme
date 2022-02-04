import { baseConfig } from '../dictionary/baseConfig'
import { reorder } from '../helpers/general'
import { types } from '../types/types'

const { configInitial } = baseConfig

const initialStateNew = {
  cheatsheets: [],
  loadingEvent: false,
  currentCheatsheetContentSettings: {
    style: '',
    type: '',
    columns: '',
    color: '',
    size: ''
  },
  currentCheatSheet: {
    title: 'Documento sin título',
    description: 'Descripción',
    section: {},
    tags: [],
    permissions: 'public',
    favorite: false,
    sheets: [
      {
        title: '',
        favorite: false,
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
        ]
      }
    ]
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

export const sheetReducer = (state = initialStateNew, action) => {
  switch (action.type) {
    // CheatSheet
    case types.saveCheatsheet:
      return {
        ...state,
        cheatsheets: [...state.cheatsheets, action.payload]
      }
    // Sheet
    case types.updateContentSheet:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          rows: state.currentCheatSheet.rows.map(item => item.id === action.payload.row ? action.payload.updatedRow : item)
        }
      }
    case types.setConfigSheet:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          config: action.payload
        }
      }
    case types.addRow: {
      const idRow = Math.floor(Math.random() * Date.now())
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          rows: [...state.currentCheatSheet.rows, { ...state.currentCheatSheet.row, id: idRow }]
        }
      }
    }
    case types.deleteRow:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          rows: state.currentCheatSheet.rows.filter((item) => action.payload !== item.id)
        }
      }
    case types.reOrder:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          rows: reorder(state.currentCheatSheet.rows, action.payload.sourceIndex, action.payload.destinationIndex)
        }
      }
    case types.loadingEvent:
      return {
        ...state,
        loadingEvent: action.payload
      }
    case types.saveSheet:
      return {
        loadingEvent: false,
        successEvent: true,
        sheets: [...state.sheets, action.payload],
        currentCheatSheet: {
          ...state.currentCheatSheet,
          rows: clearData.rows
        }
      }
    case types.eventReset:
      return {
        ...state,
        successEvent: false
      }

    default:
      return state
  }
}
