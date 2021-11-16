import { baseConfig } from '../dictionary/baseConfig'
import { types } from '../types/types'

export const setChartsheetTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: types.setTitleChartSheet,
      payload: title
    })
  }
}

export const setConfigSheet = (config) => {
  let {columns, styles, modifiedType } = config
  const { configInitial } = baseConfig
  
  if (!modifiedType){
    config.types = configInitial[columns][styles]
  }

  return (dispatch) => {
    dispatch({
      type: types.setConfigSheet,
      payload: config
    })
  }
}

export const updateContentSheet = (row, updatedRow) => {
  return (dispatch) => {
    dispatch({
      type: types.updateContentSheet,
      payload: {row, updatedRow}
    })
  }
}

export const addRow = () => {
  return (dispatch) => {
    dispatch({
      type: types.addRow
    })
  }
}

export const deleteRow = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.deleteRow,
      payload: id
    })
  }
}

export const reOrder = (sourceIndex, destinationIndex) => {
  return (dispatch) => {
    dispatch({
      type: types.reOrder,
      payload: {sourceIndex, destinationIndex}
    })
  }
}