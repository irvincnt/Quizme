import React, { useState } from 'react'
import ContentEditable from '../../helpers/ContentEditable'
import { DotsThreeVertical, Trash } from 'phosphor-react'
import Dropdown from '../../ui/Dropdown'

import '../../../styles/ui/dropdown.scss'

export const DesignOne = () => {
  const [sheet, setSheet] = useState({
    rows: [
      {
        id: Math.floor(Math.random() * Date.now()),
        columnOne: ' '
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        columnOne: ' '
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        columnOne: ' '
      }
    ],
    row: {
      id: '',
      columnOne: ' '
    }
  })

  const addRow = (curretnRow) => {
    const idRow = Math.floor(Math.random() * Date.now())
    setSheet({
      rows: [...sheet.rows, { ...sheet.row, id: idRow }],
      row: sheet.row
    })
  }

  const handleContentEditableUpdate = (event) => {
    const {
      currentTarget: {
        dataset: { row, column }
      },
      target: { value }
    } = event

    const updatedRow = sheet.rows.filter((item, i) => item.id === parseInt(row))[0]
    updatedRow[column] = value

    setSheet({
      ...sheet,
      rows: sheet.rows.map(item => item.id === row ? updatedRow : item)
    })
  }

  const pasteAsPlainText = (event) => {
    event.preventDefault()

    const text = event.clipboardData.getData('text/plain')
    document.execCommand('insertHTML', false, text)
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
  }

  const deleteRow = (id) => {
    setSheet({
      ...sheet,
      rows: sheet.rows.filter((item) => id !== item.id)
    })
  }

  function contentDropdown (item) {
    return (
      <>
        <li>
          <a>
            <div
              className='item' onClick={() => { deleteRow(item.id) }}
            >
              <Trash size={16} />
              <span>Borrar</span>
            </div>
          </a>
        </li>
      </>
    )
  }

  return (
    <>
      <div className='design one'>
        <div className='head'>
          Titulo
        </div>
        <div className='body'>
          {sheet.rows.map((item, i) => {
            return (
              <div
                key={item.id}
                className='cell'
              >
                <Dropdown
                  head={<DotsThreeVertical size={16} weight='bold' className='icon-menu' />}
                  content={contentDropdown(item)}
                />
                <ContentEditable
                  data-column='columnOne'
                  data-row={item.id}
                  html={item.columnOne}
                  onPaste={pasteAsPlainText}
                  onFocus={highlightAll}
                  onChange={handleContentEditableUpdate}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='add'>
        <button onClick={addRow}>Add</button>
      </div>
    </>
  )
}
