import React from 'react'

import '../../styles/pages/sheetConfig.scss'
import Config from '../sheet/Config'

function ConfigSheet () {
  return (
    <div className='container-fluid configuration'>
      <h1>Configuración</h1>
      <div className='flex gap-12'>
        <div className='card config'>
          <Config />
        </div>
        <div className='card preview'> preview</div>
      </div>
    </div>
  )
}

export default ConfigSheet
