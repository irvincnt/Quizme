import { baseConfig } from '../dictionary/baseConfig'
import { fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'
import toast from 'react-hot-toast'

export const setChartsheetTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: types.setTitleChartSheet,
      payload: title
    })
  }
}

export const setConfigSheet = (config) => {
  const { columns, styles, modifiedType } = config
  const { configInitial } = baseConfig

  if (!modifiedType) {
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
      payload: { row, updatedRow }
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
      payload: { sourceIndex, destinationIndex }
    })
  }
}

export const sendSheet = (sheet) => {
  return async (dispatch) => {
    dispatch(loadingEvent(true))
    const resp = await fetchWithToken('sheet/new', { sheet }, 'POST')
    const body = await resp.json()
    const { ok, msg, data } = body

    if (ok) {
      toast.success('Sucess!')
      const { sheet } = data
      dispatch(saveSheet(sheet))
    } else {
      toast.error(`${msg}`)
      dispatch(loadingEvent(false))
    }
  }
}

const loadingEvent = (loading) => (
  {
    type: types.loadingEvent,
    payload: loading
  }
)

const saveSheet = (data) => (
  {
    type: types.saveSheet,
    payload: { rows: data.rows, config: data.config }
  }
)
