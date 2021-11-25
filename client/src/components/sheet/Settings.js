import React, { useState } from 'react'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import Config from './Config'

import Structure from './Structure'

const tabsComponent = {
  editor: {
    name: 'Editor',
    component: <Structure />
  },
  config: {
    name: 'Configuración',
    component: <Config />
  }
}

function Settings () {
  const [tab, setTabs] = useState('editor')

  const handlerTab = (tabName) => {
    setTabs(tabName)
  }

  return (
    <div className='card settings'>
      <div className='tab'>
        <div className='tab-head'>
          <div className={`${tab === 'editor' ? 'item active' : 'item'}`} onClick={() => handlerTab('editor')}><span>Editor</span></div>
          <div className={`${tab === 'config' ? 'item active' : 'item'}`} onClick={() => handlerTab('config')}><span>Configuración</span></div>
        </div>
        <div className='tab-body'>
          {tabsComponent[tab].component}
        </div>
      </div>
    </div>
  )
}

export default Settings
