import React, { useState } from 'react'
import ContentEditable from '../../helpers/ContentEditable'
import { DotsThreeVertical } from 'phosphor-react'
import Dropdown from '../../ui/Dropdown'

import '../../../styles/ui/dropdown.scss'

export const DesignOne = () => {
  const [sheet, setSheet] = useState({
    rows: [
      {
        id: 1,
        columnOne: ' '
      },
      {
        id: 2,
        columnOne: ' '
      },
      {
        id: 3,
        columnOne: ' '
      }
    ],
    row: {
      id: '',
      columnOne: ' '
    }
  })

  const addRow = (curretnRow) => {
    const idRow = sheet.rows.length + 1
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

    const updatedRow = sheet.rows.filter((item, i) => parseInt(i) === parseInt(row))[0]
    updatedRow[column] = value

    setSheet({
      ...sheet,
      rows: sheet.rows.map((item, i) => i === row ? updatedRow : item)
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

  function contentDropdown () {
    return (
      <>
        <p>hola</p>
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
                  content={contentDropdown()}
                />
                <ContentEditable
                  data-column='columnOne'
                  data-row={i}
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
