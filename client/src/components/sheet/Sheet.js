import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChartsheetTitle, updateCheatsheetDescription } from '../../actions/sheet'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/cheatsheet.scss'

function Sheet () {
  const dispatch = useDispatch()
  const { currentCheatSheet: { title, description } } = useSelector(state => state.sheet)

  const handlerChangeTitle = (evt) => {
    dispatch(setChartsheetTitle(evt.target.value))
  }

  const handlerDescriptionUpdate = (evt) => {
    const { target: { value } } = evt
    dispatch(updateCheatsheetDescription(value))
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
  }

  const handlerResetTitle = () => {
    if (title.length <= 0) {
      const evt = { target: { value: 'Documento sin título' } }
      handlerChangeTitle(evt)
    }
  }

  return (
    <div className='sheet'>
      <div className='content'>
        <div className='title'>
          <ContentEditable
            className='label'
            html={title}
            tagName='h1'
            onChange={handlerChangeTitle}
            onFocus={highlightAll}
            onBlur={handlerResetTitle}
          />
          {title !== 'Documento sin título' && <em>cheatsheet</em>}
        </div>
        <ContentEditable
          className='description'
          html={description}
          tagName='h2'
          onChange={handlerDescriptionUpdate}
          onFocus={highlightAll}
        />
        <hr className='divider' />
        <span className='instruction'>Podrás agregar contenido después de agregar la configuración y crear el CheatSheet</span>
      </div>
    </div>
  )
}

export default Sheet
