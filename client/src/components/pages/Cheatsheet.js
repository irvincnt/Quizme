import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'

import '../../styles/pages/cheatsheet.scss'
import Controls from '../sheet/Controls'
import Sheet from '../sheet/Sheet'
import { fetchWithToken } from '../../helpers/fetch'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Cheatsheet'
  }
]

function Cheatsheet () {
  const { cheatsheetId } = useParams()
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
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      console.log('cs effect', data.cheatsheet)
      if (ok) { setCheatsheetConfig(data.cheatsheet) }
      console.log('Body', body)
    }
    fetchData()
  }, [cheatsheetId])

  console.log('PARAMS', cheatsheetId)
  return (
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls
            isEditionMode={false}
            cheatsheetConfig={cheatsheetConfig}
          />
          {/* <button
            className='btn btn-primary'
            onClick={handlerCreateCheatsheet}
          >{loadingEvent ? <Spinner height={14} width={14} /> : 'Crear cheatsheet'}
          </button> */}
        </div>
        <Sheet
          cheatsheetConfig={cheatsheetConfig}
        />
      </div>
      Cheatsheet
    </div>
  )
}

export default Cheatsheet
