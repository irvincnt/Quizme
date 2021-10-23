import React, { useState } from 'react'
import ContentEditable from '../../helpers/ContentEditable'
import { DotsThreeVertical, Trash, DotsSixVertical } from 'phosphor-react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

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

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result) => {
    const { source, destination } = result
    if (!destination) return

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      // eslint-disable-next-line no-useless-return
      return
    }

    setSheet({
      ...sheet,
      rows: reorder(sheet.rows, source.index, destination.index)
    })
  }

  return (
    <>
      <div className='design one'>
        <div className='head'>
          Titulo
        </div>
        <div className='body'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='sheet'>
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                  className='container'
                >
                  {sheet.rows.map((item, i) => (
                    <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={i}>
                      {(draggableProvided) => (
                        <div
                          key={`${item.id}`}
                          className='cell'
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                        >
                          <div {...draggableProvided.dragHandleProps}>
                            <DotsSixVertical size={20} weight='bold' className='drag' />
                          </div>
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
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div className='add'>
        <button onClick={addRow}>Add</button>
      </div>
    </>
  )
}
