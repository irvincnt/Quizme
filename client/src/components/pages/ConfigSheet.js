import React from 'react'
import CreatableSelect from 'react-select/creatable'
import Breadcrumb from '../ui/Breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { LockKey, LockKeyOpen, Star, Tag, Atom, Warning } from 'phosphor-react'
import {
  createCheatsheet,
  selectChartsheetPermissions,
  updateChartsheetFavorite,
  updateChartsheetSection,
  updateChartsheetTags
} from '../../actions/sheet'

import '../../styles/pages/sheetConfig.scss'
import '../../styles/ui/elements.scss'
import Dropdown from '../ui/Dropdown'
import Sheet from '../sheet/Sheet'
import Spinner from '../ui/spinner'

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
  { value: 'software', label: 'Software' },
  { value: 'programation', label: 'Programación' },
  { value: 'english', label: 'Inglés' },
  { value: 'biblie', label: 'Biblia' }
]
function ConfigSheet () {
  const dispatch = useDispatch()
  const { currentCheatSheet, loadingEvent } = useSelector(state => state.sheet)
  const { title, description, permissions, favorite, section, tags } = currentCheatSheet

  const handlerPermissions = (value) => {
    dispatch(selectChartsheetPermissions(value))
  }

  const handlerFavorite = () => {
    dispatch(updateChartsheetFavorite(!favorite))
  }

  const handleChangeSection = (sectionType) => {
    dispatch(updateChartsheetSection(sectionType))
  }

  const handleChangeTags = (tags) => {
    dispatch(updateChartsheetTags(tags))
  }

  function headDropdownPermissions () {
    return (
      <div className='controll'>
        {
          permissions === 'public'
            ? (<><LockKeyOpen size={22} /> <span>Público</span></>)
            : (<><LockKey size={22} /> <span>Privado</span></>)
        }
      </div>
    )
  }
  function contentDropdownPermissions () {
    return (
      <>
        <li onClick={() => handlerPermissions('private')}>
          <div className='item'>
            <div className='permision'>
              <LockKey size={22} />
              <p>Privado</p>
            </div>
            <span className='instruction'>Sólo tú puede ver este Cheatsheet.</span>
          </div>
        </li>
        <li onClick={() => handlerPermissions('public')}>
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
      <div className='controll'>
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
              options={options}
              onChange={handleChangeSection}
            />
          </div>
        </li>
      </>
    )
  }
  function headDropdownTags () {
    return (
      <div className='controll'>
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
    // <div className='card'>
      <>
        <li>
          <CreatableSelect
            isMulti
            placeholder='Selecciona un elemento'
            options={options}
            onChange={handleChangeTags}
          />

        </li>
      </>
    // </div>
    )
  }

  const handlerCreateCheatsheet = () => {
    const { ok, msg } = validateConfig()
    if (ok) {
      toast((t) => (
        <div>
          <Warning size={24} color='#ffcc2e' weight='fill' />
          {msg.length === 1 ? 'El siguiente campo es requerido' : 'Los siguientes campos son requeridos'}
          <ul>
            {msg.map((e, i) => {
              return <li key={i}>{e}</li>
            })}
          </ul>
        </div>
      ))
    } else {
      dispatch(createCheatsheet(currentCheatSheet))
    }
  }

  const validateConfig = () => {
    let errors = { ok: false, msg: [] }

    if (title === 'Documento sin título' || title === '') {
      errors = { ok: true, msg: [...errors.msg, 'Titulo'] }
    }

    if (description === 'Descripción' || description === '') {
      errors = { ok: true, msg: [...errors.msg, 'Descripción'] }
    }

    if (Object.keys(section).length === 0) {
      errors = { ok: true, msg: [...errors.msg, 'Sección'] }
    }

    if (tags.length === 0) {
      errors = { ok: true, msg: [...errors.msg, 'Tags'] }
    }
    return errors
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
            <div className='controll'>
              <div className='flex' onClick={() => handlerFavorite()}>
                {
                  favorite ? <Star size={22} color='#f9c10b' weight='fill' /> : <Star size={22} />
                }
              </div>
            </div>
            <Dropdown
              head={headDropdownPermissions()}
              content={contentDropdownPermissions()}
              aligned='is-left'
            />
            <Dropdown
              head={headDropdownSection()}
              content={contentDropdownSection()}
              aligned='is-left'
              isBlocked={false}

            />
            <Dropdown
              head={headDropdownTags()}
              content={contentDropdownTags()}
              aligned='is-left'
              isBlocked={false}

            />
          </div>
          <button
            className='btn btn-primary'
            onClick={handlerCreateCheatsheet}
          >{loadingEvent ? <Spinner height={14} width={14} /> : 'Crear cheatsheet'}
          </button>
        </div>
        <Sheet />
      </div>
      <Toaster />
    </div>
  )
}

export default ConfigSheet
