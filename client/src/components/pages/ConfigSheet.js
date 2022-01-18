import React from 'react'
import Config from '../sheet/Config'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'

function ConfigSheet () {
  return (
    <div className='configuration container-fluid'>
      <div className='flex gap-12'>
        <div className='card config'>
          <h4 className='card-title'>Configuración</h4>
          <div className='card-content'>
            <Config />
            <button className='btn btn-primary'>Crear cheatsheet</button>
          </div>
        </div>
        <div className='card preview'>preview</div>
      </div>
    </div>
  )
}

export default ConfigSheet
