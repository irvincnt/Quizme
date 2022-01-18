import React, { useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable'

import { LockKey, LockKeyOpen } from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPermissionsSheet, updateDescriptionSheet, updateSectionSheet, updateTagsSheet } from '../../actions/sheet'
import { sections } from '../../dictionary/sectionsConfig'
import { fetchWithToken } from '../../helpers/fetch'

function Config () {
  const { currentSheet: { permissions } } = useSelector(state => state.sheet)
  const dispatch = useDispatch()
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken('sheet/tags/')
      const body = await resp.json()
      const { data } = body
      setTags(data.allTags)
    }
    fetchData()
  }, [])

  const handlerDescriptionUpdate = (event) => {
    const { target: { value } } = event
    dispatch(updateDescriptionSheet(value))
  }

  const handleChangeSection = (section) => {
    dispatch(updateSectionSheet(section))
  }

  const handleChangeTags = (tags) => {
    dispatch(updateTagsSheet(tags))
  }

  const handlerPermissions = (value) => {
    dispatch(selectPermissionsSheet(value))
  }

  return (
    <>
      <div className='input-group'>
        <label className='label'>Titulo</label>
        <input type='text' name='title' />
      </div>
      <div className='input-group'>
        <label className='label'>Descripción</label>
        <textarea name='' id='' cols='30' rows='4' onChange={handlerDescriptionUpdate} />
      </div>
      <div className='input-group'>
        <label className='label'>Sección</label>
        <CreatableSelect
          placeholder='Selecciona un elemento'
          options={sections}
          onChange={handleChangeSection}
        />
      </div>
      <div className='input-group'>
        <label className='label'>Tags</label>
        <CreatableSelect
          isMulti
          placeholder='Selecciona un elemento'
          options={tags}
          onChange={handleChangeTags}
        />
      </div>
      <div className='permissions'>
        <div className={`${permissions === 'public' ? 'item active' : 'item'}`} onClick={() => handlerPermissions('public')}>
          <LockKeyOpen size={36} />
          <p>Público</p>
          <span>Cualquiera en Internet puede ver este cheatsheet.</span>
        </div>
        <div className={`${permissions === 'private' ? 'item active' : 'item'}`} onClick={() => handlerPermissions('private')}>
          <LockKey size={36} />
          <p>Privado</p>
          <span>Solo tu puede ver este cheatsheet.</span>
        </div>
      </div>
    </>
  )
}

export default Config
