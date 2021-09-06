import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST')
    const body = await resp.json()
    if (body.ok) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', body.token)
      // eslint-disable-next-line no-undef
      localStorage.setItem('token-init.date', new Date().getTime())

      dispatch(login({
        id: body?.user?.id,
        name: body?.user?.name
      }))
    } else {
      console.error(`🛑 Error startLogin ${body.msg}`)
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
    } else {
      console.error(`Error ${body.msg}`)
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

const logout = () => ({ type: types.authLogout })
const checkingFinish = () => ({ type: types.authCheckingFinish })
