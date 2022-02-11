import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addSettings } from '../actions/jotting'
import Setting from '../components/jotting/setting'
import { Editor } from '../components/sheet/Editor'
import { fetchWithToken } from '../helpers/fetch'

import '../styles/pages/jotting.scss'

function Jotting () {
  const dispatch = useDispatch()
  const { cheatsheetId, sheetId } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`sheet/${sheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        const { settings } = data.sheet
        dispatch(addSettings(settings))
        console.log('SHEET', data)
      } else {
        history.push('/home')
      }
    }
    fetchData()
  }, [cheatsheetId, sheetId])

  return (
    <div className='jotting'>
      <div className='jotting-head'>
        <span>icono</span>
        <Setting />
        <div className='actions'>botones</div>
      </div>
      <Editor />
    </div>
  )
}

export default Jotting
