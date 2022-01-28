import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'

import '../../styles/pages/cheatsheet.scss'
import Controls from '../sheet/Controls'
import Sheet from '../sheet/Sheet'

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
  console.log('PARAMS', cheatsheetId)
  return (
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls />
          {/* <button
            className='btn btn-primary'
            onClick={handlerCreateCheatsheet}
          >{loadingEvent ? <Spinner height={14} width={14} /> : 'Crear cheatsheet'}
          </button> */}
        </div>
        <Sheet />
      </div>
      Cheatsheet
    </div>
  )
}

export default Cheatsheet
