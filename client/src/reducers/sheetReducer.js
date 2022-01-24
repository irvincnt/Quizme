import { baseConfig } from '../dictionary/baseConfig'
import { reorder } from '../helpers/general'
import { types } from '../types/types'

const { configInitial } = baseConfig

const initialState = {
  sheets: [],
  loadingEvent: false,
  currentSheet: {
    title: 'To write title',
    description: '',
    section: {},
    tags: [],
    permissions: 'public',
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

const initialStateNew = {
  cheatsheets: [],
  loadingEvent: false,
  currentCheatSheet: {
    title: 'To write title',
    description: '',
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
    case types.setTitleChartSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          title: action.payload
        }
      }
    case types.updateDescriptionSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          description: action.payload
        }
      }
    case types.updateSectionSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          section: action.payload
        }
      }
    case types.updateTagsSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          tags: [...action.payload]
        }
      }
    case types.selectPermissions:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          permissions: action.payload
        }
      }
    case types.updateFavorite:
      return {
        ...state,
        currentCheatSheet: {
          ...state.currentCheatSheet,
          favorite: action.payload
        }
      }
    // Sheet
    case types.updateContentSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          rows: state.currentSheet.rows.map(item => item.id === action.payload.row ? action.payload.updatedRow : item)
        }
      }
    case types.setConfigSheet:
      return {
        ...state,
        currentSheet: {
          ...state.currentSheet,
          config: action.payload
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
        loadingEvent: action.payload
      }
    case types.saveSheet:
      return {
        loadingEvent: false,
        successEvent: true,
        sheets: [...state.sheets, action.payload],
        currentSheet: {
          ...state.currentSheet,
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
