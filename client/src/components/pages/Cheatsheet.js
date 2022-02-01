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
  const [isEditionMode, setIsEditionMode] = useState(false)
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
      if (ok) { setCheatsheetConfig(data.cheatsheet) }
    }
    fetchData()
  }, [cheatsheetId])

  const handlerEditCheatsheet = () => {
    setIsEditionMode(!isEditionMode)
  }

  return (
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls
            isEditionMode={isEditionMode}
            cheatsheetConfig={cheatsheetConfig}
          />
          {
            !isEditionMode
              ? <button className='btn' onClick={handlerEditCheatsheet}>Editar</button>
              : <div className='buttons'>
                <button className='btn'>Guardar</button>
                <button className='btn' onClick={handlerEditCheatsheet}>Cancelar</button>
                </div>
          }
        </div>
        <Sheet
          cheatsheetConfig={cheatsheetConfig}
          disabledSheet={isEditionMode}
        />
      </div>
      Cheatsheet
    </div>
  )
}

export default Cheatsheet
