import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Setting from '../components/jotting/setting'
import { fetchWithToken } from '../helpers/fetch'

import '../styles/pages/sheet.scss'

function Jotting () {
  const { cheatsheetId, sheetId } = useParams()
  const history = useHistory()
  const [cheatsheetConfig, setCheatsheetConfig] = useState({
    title: 'Documento sin título',
    description: 'Descripción',
    favorite: false,
    private: true,
    section: {},
    tags: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`sheet/${sheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        console.log('SHEET', data)
      } else {
        history.push('/home')
      }
    }
    fetchData()
  }, [cheatsheetId, sheetId])

  return (
    <div className='jotting'>
      <div className='head'>
        <span>icono</span>
        <Setting />
        <div className='actions'>botones</div>
      </div>
    </div>
  )
}

export default Jotting
