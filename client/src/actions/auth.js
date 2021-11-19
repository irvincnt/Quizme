import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'

export const startLogin = (path, data) => {
  return async (dispatch) => {
    dispatch(loading())
    const resp = await fetchWithoutToken(path, data, 'POST')
    const body = await resp.json()
    if (body.ok) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', body.token)
      // eslint-disable-next-line no-undef
      localStorage.setItem('user', JSON.stringify(body.user))

      dispatch(login({
        id: body?.user?.id,
        name: body?.user?.name,
        picture: body?.user?.picture
      }))
      dispatch(hideMessageError())
    } else {
      dispatch(addMessageError(body.msg, 'Login'))
    }
  }
}

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('auth/renew')
    const body = await resp.json()

    if (body.ok) {
      dispatch(
        login({
          id: body?.user?.id,
          name: body?.user?.name
        })
      )
    } else {
      console.log('🛑 startChecking error', body.msg)
      // eslint-disable-next-line no-undef
      localStorage.clear()
      dispatch(checkingFinish())
    }
  }
}

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      'auth/register',
      { name, email, password },
      'POST'
    )
    const body = await resp.json()
    if (body.ok) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', body.token)
      // eslint-disable-next-line no-undef
      localStorage.setItem('token-init.date', new Date().getTime())

      dispatch(
        login({
          id: body?.user?.id,
          name: body?.user?.name
        })
      )
      dispatch(hideMessageError())
    } else {
      dispatch(addMessageError(body.msg, 'Register'))
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

export const startLogout = () => {
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    localStorage.clear()
    dispatch(logout())
  }
}
const loading = () => ({ type: types.authLoading })
const logout = () => ({ type: types.authLogout })
const checkingFinish = () => ({ type: types.authCheckingFinish })

const addMessageError = (msg, type) => ({
  type: types.messageError,
  payload: { msg, type }
})

const hideMessageError = () => ({ type: types.hideMessage })
