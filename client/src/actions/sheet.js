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
