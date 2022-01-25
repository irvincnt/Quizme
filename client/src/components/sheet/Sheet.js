import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChartsheetTitle, updateDescriptionSheet } from '../../actions/sheet'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/sheetConfig.scss'

function Sheet () {
  const dispatch = useDispatch()
  const { currentCheatSheet: { title, description } } = useSelector(state => state.sheet)

  const handlerChangeTitle = (evt) => {
    dispatch(setChartsheetTitle(evt.target.value))
  }

  const handlerDescriptionUpdate = (evt) => {
    const { target: { value } } = evt
    dispatch(updateDescriptionSheet(value))
  }
  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
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
        <hr />
      </div>
    </div>
  )
}

export default Sheet
