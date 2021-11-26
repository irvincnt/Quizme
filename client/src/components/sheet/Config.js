import React from 'react'
import CreatableSelect from 'react-select/creatable'

import { LockKey, LockKeyOpen } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { updateDescriptionSheet, updateSectionSheet, updateTagsSheet } from '../../actions/sheet'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Config () {
  const dispatch = useDispatch()
  const handlerDescriptionUpdate = (event) => {
    const { target: { value } } = event
    dispatch(updateDescriptionSheet(value))
  }

  const handleChangeSelect = (section) => {
    dispatch(updateSectionSheet(section))
  }

  const handleChangeTags = (tags) => {
    dispatch(updateTagsSheet(tags))
  }

  return (
    <div className='config'>
      <div className='input-group'>
        <label className='label'>Descripción</label>
        <textarea name='' id='' cols='30' rows='4' onChange={handlerDescriptionUpdate} />
      </div>
      <div className='input-group'>
        <label className='label'>Sección</label>
        <CreatableSelect
          options={options}
          onChange={handleChangeSelect}
        />
      </div>
      <div className='input-group'>
        <label className='label'>Tags</label>
        <CreatableSelect
          isMulti
          options={options}
          onChange={handleChangeTags}
        />
      </div>
      <div className='permissions'>
        <div className='item active'>
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
