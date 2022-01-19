import React from 'react'
import Breadcrumb from '../ui/Breadcrumb'
import { LockKey, LockKeyOpen, Star, Tag, Atom, PlusCircle } from 'phosphor-react'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'
import Dropdown from '../ui/Dropdown'

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
  function headDropdown () {
    return (
      <div className='item'>
        <LockKeyOpen size={22} />
        <span>Público</span>
      </div>
    )
  }
  function contentDropdown () {
    return (
      <>
        <div className='item'>
          <LockKey size={22} />
          <span>Privado</span>
        </div>
        <div className='item'>
          <LockKeyOpen size={22} />
          <span>Público</span>
        </div>
      </>
    )
  }

  return (
    <div className='configuration container-fluid'>
      <div className='head'>
        <h2>Configuración</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <div className='controls'>
            <Dropdown
              head={headDropdown()}
              content={contentDropdown()}
            />
            <div className='item'>
              <Star size={24} color='#f9c10b' weight='fill' />
            </div>
            {/* <div className='item'>
              <Star size={24} color='#f9c10b' weight='fill' />
            </div> */}
            <div className='item'>
              <Atom size={22} />
              <span>Sección</span>
            </div>
            <div className='item'>
              <Tag size={22} />
              <span>Tags</span>
            </div>
          </div>
          <button className='btn btn-primary'>Crear</button>
        </div>
        <div className='sheet'>
          contenido
        </div>
      </div>

    </div>
  )
}

export default ConfigSheet
