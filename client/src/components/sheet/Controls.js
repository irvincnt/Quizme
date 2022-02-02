/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { LockKey, LockKeyOpen, Star, Tag, Atom } from 'phosphor-react'
import Dropdown from '../ui/Dropdown'

import '../../styles/pages/cheatsheet.scss'
import { sectionsType } from '../../dictionary/baseConfig'

const optionsTags = [
  { value: 'software', label: 'Software' },
  { value: 'programation', label: 'Programación' },
  { value: 'english', label: 'Inglés' },
  { value: 'biblie', label: 'Biblia' }
]

function Controls ({ getCheatsheetConfig, cheatsheetConfig, isEditionMode = true }) {
  const { private: cheatsheetPrivate, section, tags, favorite } = cheatsheetConfig
  const [favoriteControl, setFavoriteControl] = useState(favorite)

  const handlerControls = (controls) => {
    if (controls.key === 'favorite') {
      setFavoriteControl(!favoriteControl)
      controls = { key: 'favorite', value: favoriteControl }
    }
    getCheatsheetConfig(controls)
  }

  function headDropdownPermissions () {
    return (
      <div className={`controll ${isEditionMode ? 'isEditable' : ''}`}>
        {
          cheatsheetPrivate
            ? (<><LockKey size={22} /> <span>Privado</span></>)
            : (<><LockKeyOpen size={22} /> <span>Público</span></>)
        }
      </div>
    )
  }
  function contentDropdownPermissions () {
    return (
      <>
        <li onClick={() => handlerControls({ key: 'private', value: true })}>
          <div className='item'>
            <div className='permision'>
              <LockKey size={22} />
              <p>Privado</p>
            </div>
            <span className='instruction'>Sólo tú puede ver este Cheatsheet.</span>
          </div>
        </li>
        <li onClick={() => handlerControls({ key: 'private', value: false })}>
          <div className='item'>
            <div className='permision'>
              <LockKeyOpen size={22} />
              <p>Público</p>
            </div>
            <span className='instruction'>Cualquiera en internet puede ver este Cheatsheet.</span>
          </div>
        </li>
      </>
    )
  }
  function headDropdownSection () {
    return (
      <div className={`controll ${isEditionMode ? 'isEditable' : ''}`}>
        <Atom size={22} />
        <span>Sección: </span>
        {section && <span>{section.label}</span>}
      </div>
    )
  }
  function contentDropdownSection () {
    return (
      <>
        <li>
          <div className='card'>
            <CreatableSelect
              placeholder='Selecciona un elemento'
              options={sectionsType}
              onChange={handlerControls}
            />
          </div>
        </li>
      </>
    )
  }
  function headDropdownTags () {
    return (
      <div className={`controll ${isEditionMode ? 'isEditable' : ''}`}>
        <Tag size={22} />
        <span>Tags:</span>
        {
          tags.length > 0 && (
            tags.map(tag => {
              return (<span key={tag.value} className='badge bg-info'>{tag.label}</span>)
            })
          )
        }
      </div>
    )
  }
  function contentDropdownTags () {
    return (
      <>
        <li>
          <CreatableSelect
            isMulti
            value={tags}
            placeholder='Selecciona un elemento'
            options={optionsTags}
            onChange={(tag) => handlerControls({ value: [...tag], key: 'tags' })}
          />

        </li>
      </>
    )
  }

  return (
    <div className='elements_controlls'>
      <div className={`controll ${isEditionMode ? 'isEditable' : ''}`}>
        {
          isEditionMode
            ? <div className='flex' onClick={() => handlerControls({ key: 'favorite' })}>
              {favoriteControl ? <Star size={22} color='#f9c10b' weight='fill' /> : <Star size={22} />}
              </div>
            : <div className='flex'>
              {favoriteControl ? <Star size={22} color='#f9c10b' weight='fill' /> : <Star size={22} />}
              </div>
        }
      </div>
      <Dropdown
        isEditionMode={isEditionMode}
        head={headDropdownPermissions()}
        content={contentDropdownPermissions()}
        aligned='is-left'
      />
      <Dropdown
        isEditionMode={isEditionMode}
        head={headDropdownSection()}
        content={contentDropdownSection()}
        aligned='is-left'
        isBlocked={false}
      />
      <Dropdown
        isEditionMode={isEditionMode}
        head={headDropdownTags()}
        content={contentDropdownTags()}
        aligned='is-left'
        isBlocked={false}
      />
    </div>
  )
}

export default Controls
