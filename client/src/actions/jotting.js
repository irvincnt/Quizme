import { types } from '../types/types'

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
