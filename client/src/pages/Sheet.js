import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Controls from '../components/cheatsheet/Controls'
import Breadcrumb from '../components/ui/Breadcrumb'
import { fetchWithToken } from '../helpers/fetch'

import '../styles/sheet/sheet.scss'

function Sheet () {
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

  const breadcrumbContent = [
    {
      label: 'Home',
      open: '/home'
    },
    {
      label: 'Cheatsheet',
      open: `/cheatsheet/${cheatsheetId}`
    },
    {
      label: 'Contentido'
    }
  ]

  return (
    <div className='cheatsheet sheet container-fluid'>
      <div className='head'>
        <h2>Contenido</h2>
        <div className='tab-head'>
          <div className='item active'><span>Apunte</span></div>
          <div className='item'><span>Todos los apuntes</span></div>
        </div>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls
            cheatsheetConfig={cheatsheetConfig}
            getCheatsheetConfig={() => console.log('')}
          />
        </div>
      </div>
    </div>
  )
}

export default Sheet
