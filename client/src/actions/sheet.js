import { baseConfig } from '../dictionary/baseConfig'
import { fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'
import toast from 'react-hot-toast'

// CheatSheet actions
export const setChartsheetTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: types.setChartsheetTitle,
      payload: title
    })
  }
}

export const updateCheatsheetDescription = (content) => {
  return (dispatch) => {
    dispatch({
      type: types.updateCheatsheetDescription,
      payload: content
    })
  }
}

export const updateChartsheetSection = (section) => {
  return (dispatch) => {
    dispatch({
      type: types.updateChartsheetSection,
      payload: section
    })
  }
}

export const updateChartsheetTags = (tags) => {
  return (dispatch) => {
    dispatch({
      type: types.updateChartsheetTags,
      payload: tags
    })
  }
}

export const selectChartsheetPermissions = (permission) => {
  return (dispatch) => {
    dispatch({
      type: types.selectChartsheetPermissions,
      payload: permission
    })
  }
}

export const updateChartsheetFavorite = (favorire) => {
  return (dispatch) => {
    dispatch({
      type: types.updateChartsheetFavorite,
      payload: favorire
    })
  }
}

export const createCheatsheet = (cheatsheet) => {
  return async (dispatch) => {
    dispatch(loadingEvent(true))
    const resp = await fetchWithToken('sheet/new', { cheatsheet }, 'POST')
    const body = await resp.json()
    const { ok, msg, data } = body
    if (ok) {
      toast.success('¡Guardado!')
      // const { sheet } = data
      console.log('DATOS DESDE ACTION', data)
      // dispatch(saveSheet(sheet))
    } else {
      toast.error(`${msg}`)
      console.log('ERROR', msg)
      // dispatch(loadingEvent(false))
    }
  }
}

// Cheatsheet content actions

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
      toast.success('¡Guardado!')
      const { sheet } = data
      dispatch(saveSheet(sheet))
    } else {
      toast.error(`${msg}`)
      dispatch(loadingEvent(false))
    }
  }
}

export const eventReset = () => {
  return (dispatch) => {
    dispatch({
      type: types.eventReset
    })
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
