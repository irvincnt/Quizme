import React from 'react'
import CreatableSelect from 'react-select/creatable'
import Breadcrumb from '../ui/Breadcrumb'
import { LockKey, LockKeyOpen, Star, Tag, Atom, PlusCircle } from 'phosphor-react'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'
import Dropdown from '../ui/Dropdown'
import Config from '../sheet/Config'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Configuración'
  }
]
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
function ConfigSheet () {
  function headDropdownPermissions () {
    return (
      <div className='controll'>
        <LockKeyOpen size={22} />
        <span>Público</span>
      </div>
    )
  }
  function contentDropdownPermissions () {
    return (
      <>
        <div className='item'>
          <div className='permision'>
            <LockKey size={22} />
            <p>Privado</p>
          </div>
          <span className='instruction'>Sólo tú puede ver este Cheatsheet.</span>
        </div>
        <div className='item'>
          <div className='permision'>
            <LockKeyOpen size={22} />
            <p>Público</p>
          </div>
          <span className='instruction'>Cualquiera en internet puede ver este Cheatsheet.</span>
        </div>
      </>
    )
  }
  function headDropdownSection () {
    return (
      <div className='controll'>
        <Atom size={22} />
        <span>Sección</span>
      </div>
    )
  }
  function contentDropdownSection () {
    return (
      <div className='card'>
        <CreatableSelect
          placeholder='Selecciona un elemento'
          options={options}
        />
      </div>
    )
  }
  function headDropdownTags () {
    return (
      <div className='controll'>
        <Tag size={22} />
        <span>Tags</span>
      </div>
    )
  }
  function contentDropdownTags () {
    return (
    // <div className='card'>
      <CreatableSelect
        isMulti
        placeholder='Selecciona un elemento'
        options={options}
      />
    // </div>
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
          <div className='elements_controlls'>
            <Dropdown
              head={headDropdownPermissions()}
              content={contentDropdownPermissions()}
              aligned='is-left'
            />
            <div className='controll'>
              <Star size={24} color='#f9c10b' weight='fill' />
            </div>
            {/* <div className='item'>
              <Star size={24} color='#f9c10b' weight='fill' />
            </div> */}
            <Dropdown
              head={headDropdownSection()}
              content={contentDropdownSection()}
              aligned='is-left'
              nValidate={false}

            />
            <Dropdown
              head={headDropdownTags()}
              content={contentDropdownTags()}
              aligned='is-left'
              nValidate={false}

            />

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
