import React from 'react'
import Select from 'react-select'
import { LockKey, LockKeyOpen } from 'phosphor-react'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Config () {
  return (
    <div className='config'>
      <div className='input-group'>
        <label className='label'>Descripción</label>
        <textarea name='' id='' cols='30' rows='4' />
      </div>
      <div className='input-group'>
        <label className='label'>Sección</label>
        <Select options={options} />
      </div>
      <div className='input-group'>
        <label className='label'>Tags</label>
        <Select isMulti options={options} />
      </div>
      <div className='permissions'>
        <div className='item'>
          <LockKeyOpen size={36} />
          <p>Público</p>
          <span>Cualquiera en Internet puede ver este cheatsheet.</span>
        </div>
        <div className='item'>
          <LockKey size={36} />
          <p>Privado</p>
          <span>Solo tu puede ver este cheatsheet.</span>
        </div>
      </div>
    </div>
  )
}

export default Config
