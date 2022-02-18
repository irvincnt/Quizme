import { types } from '../types/types'

export const loadInitialContent = ({ title, favorite, settings, rows }) => {
  return {
    type: types.loadInitialContent,
    payload: {
      title: title,
      favorite: favorite,
      settings: settings,
      rows: rows
    }
  }
}

export const addSettings = (setting) => {
  // const { columns, styles, modifiedType } = config
  // const { configInitial } = baseConfig

  // if (!modifiedType) {
  //   config.types = configInitial[columns][styles]
  // }

  return (dispatch) => {
    dispatch({
      type: types.addJottingSetting,
      payload: setting
    })
  }
}

export const addTitle = (title) => {
  return ({
    type: types.addJottingTitle,
    payload: title
  })
}

export const updateColumnsAndRows = ({ columns, rows }) => {
  return ({
    type: types.updateColumnsByRow,
    payload: { columns, rows }
  })
}

export const updateContent = (row, updatedRow) => {
  return (dispatch) => {
    dispatch({
      type: types.updateJottingContent,
      payload: { row, updatedRow }
    })
  }
}

export const addRow = () => {
  return (dispatch) => {
    dispatch({
      type: types.addJottingRow
    })
  }
}

export const deleteRow = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.deleteJottingRow,
      payload: id
    })
  }
}

export const reOrderRows = (sourceIndex, destinationIndex) => {
  return (dispatch) => {
    dispatch({
      type: types.reOrderJottingRows,
      payload: { sourceIndex, destinationIndex }
    })
  }
}
