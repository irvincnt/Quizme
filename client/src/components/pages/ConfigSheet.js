import React from 'react'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'
import Breadcrumb from '../ui/Breadcrumb'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Configuración'
  }
]

function ConfigSheet () {
  return (
    <div className='configuration container-fluid'>
      <div className='head'>
        <h2>Configuración</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='sheet'>
          contenido
        </div>
      </div>

    </div>
  )
}

export default ConfigSheet
