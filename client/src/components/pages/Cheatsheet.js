import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'
import Controls from '../sheet/Controls'
import Sheet from '../sheet/Sheet'

import { fetchWithToken } from '../../helpers/fetch'
import { sectionsType } from '../../dictionary/baseConfig'
import '../../styles/pages/cheatsheet.scss'

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
  const [initialConfig, setInitialConfig] = useState(cheatsheetConfig)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        setCheatsheetConfig(data.cheatsheet)
        setInitialConfig(data.cheatsheet)
      }
    }
    fetchData()
  }, [cheatsheetId])

  useEffect(() => {
    if (!isEditionMode) {
      setCheatsheetConfig(initialConfig)
    }
  }, [isEditionMode])

  const handlerEditCheatsheet = () => {
    setIsEditionMode(!isEditionMode)
  }

  const getCheatsheetConfig = (config) => {
    if (config.key === 'section') {
      const sectionType = sectionsType.find(type => type.value === config.value)
      config = { value: sectionType, key: 'section' }
    }

    setCheatsheetConfig({
      ...cheatsheetConfig,
      [config.key]: config.value
    })
  }

  const handlerCreateCheatsheet = () => {
    console.log('Create', cheatsheetConfig)
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
            getCheatsheetConfig={getCheatsheetConfig}
          />
          {
            !isEditionMode
              ? <button className='btn' onClick={handlerEditCheatsheet}>Editar</button>
              : <div className='buttons'>
                <button className='btn' onClick={handlerCreateCheatsheet}>Guardar</button>
                <button className='btn' onClick={handlerEditCheatsheet}>Cancelar</button>
              </div>
          }
        </div>
        <Sheet
          disabledSheet={isEditionMode}
          cheatsheetConfig={cheatsheetConfig}
          getCheatsheetConfig={getCheatsheetConfig}
        />
      </div>
      Cheatsheet
    </div>
  )
}

export default Cheatsheet
