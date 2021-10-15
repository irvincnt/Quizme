import React, { useState } from 'react'
import ContentEditable from '../../helpers/ContentEditable'

export const DesignOne = () => {
  const [sheet, setSheet] = useState({
    rows: [
      {
        id: 1,
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

  return (
    <>
      <div className='design one'>
        <div className='head'>
          Titulo
        </div>
        <div className='body'>
          {sheet.rows.map((item, i) => {
            return (
              <ContentEditable
                key={item.id}
                data-column='columnOne'
                data-row={i}
                html={item.columnOne}
                className='cell'
                onPaste={pasteAsPlainText}
                onFocus={highlightAll}
                onChange={handleContentEditableUpdate}
              />
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
