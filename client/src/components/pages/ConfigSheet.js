import React from 'react'
import Config from '../sheet/Config'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'

function ConfigSheet () {
  return (
    <div className='configuration container-fluid'>
      <h2>Configuración</h2>
      <div className='flex gap-12'>
        <div className='card config'>
          <Config />
          <button className='btn btn-primary'>Crear cheatsheet</button>
        </div>
        <div className='card preview'>preview</div>
      </div>
    </div>
  )
}

export default ConfigSheet
