import React, { useState } from 'react'
import ContentEditable from '../helpers/ContentEditable'
import { DotsThreeVertical, Trash, DotsSixVertical } from 'phosphor-react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import MarkdownIt from 'markdown-it'

import Dropdown from '../ui/Dropdown'
import '../../styles/ui/editor.scss'

import { useDispatch, useSelector } from 'react-redux'
import { updateContent, addRow, deleteRow, reOrderRows, updateTitle } from '../../actions/jotting'

export const Editor = () => {
  const dispatch = useDispatch()
  const {
    currentJotting: {
      title,
      settings: {
        design, size, color, columnsType, columns
      },
      rows
    }
  } = useSelector(state => state.jotting)

  const [designConfig, setDesing] = useState({
    previousKey: null
  })

  const handleContentUpdate = (event) => {
    const {
      currentTarget: {
        dataset: { row, column }
      },
      target: { value }
    } = event

    const md = new MarkdownIt({
      html: false, // desactivamos el uso de HTML dentro del markdown
      breaks: false, // transforma los saltos de línea a un <br />
      xhtmlOut: false, // devuelve XHTML válido (por ejemplo <br /> en vez de <br>)
      linkify: true, // detecta enlaces y los vuelve enlaces
      typographer: true, // reemplaza ciertas palabras para mejorar el texto
      langPrefix: 'language-', // agrega una clase `language-[lang]` a los bloques de código
      highlight: function (/* str, lang */) { return '' }
    })

    const renderedHTML = md.render(value)

    const updatedRow = rows.filter((item, i) => item.id === parseInt(row))[0]
    updatedRow[column] = {
      html: renderedHTML,
      markup: value
    }
    console.log('updatedRow', updatedRow)
    dispatch(updateContent(row, updatedRow))
  }

  const handlerOnKeyDown = (e) => {
    if (e.key === 'Enter' && designConfig.previousKey !== 'Shift') {
      e.preventDefault()
      dispatch(addRow())
    }

    setDesing({ ...designConfig, previousKey: e.key })
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

  const removeRow = (id) => {
    dispatch(deleteRow(id))
  }

  function contentDropdown (item) {
    return (
      <>
        <li>
          <a>
            <div
              className='item' onClick={() => { removeRow(item.id) }}
            >
              <Trash size={16} />
              <span>Borrar</span>
            </div>
          </a>
        </li>
      </>
    )
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

    dispatch(reOrderRows(source.index, destination.index))
  }

  const handlerChangeTitle = (evt) => {
    dispatch(updateTitle(evt.target.value))
  }

  return (
    <div className='editor'>
      <div className={`design ${design} ${size} ${color}`}>
        <div className={`head ${color}`}>
          <ContentEditable
            className='title'
            html={title || 'To write...'}
            onChange={handlerChangeTitle}
            onFocus={highlightAll}
          />
        </div>
        <div className={`body ${color}`}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='sheet'>
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                  className='container'
                >
                  {rows.map((item, i) => (
                    <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={i}>
                      {(draggableProvided) => (
                        <div
                          key={`${item.id}`}
                          className={`row ${color}`}
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
                          <div className={`container-columns ${columnsType}`}>
                            {
                                (columns === 'cardC1' ||
                                columns === 'cardC2' ||
                                columns === 'cardC3') &&
                                  <ContentEditable
                                    data-column='columnOne'
                                    data-row={item.id}
                                    html={item.columnOne.markup}
                                    className='cell'
                                    placeholder='To write...'
                                    onPaste={pasteAsPlainText}
                                    onFocus={highlightAll}
                                    onChange={handleContentUpdate}
                                    onKeyDown={handlerOnKeyDown}
                                  />
}
                            {(columns === 'cardC2' ||
                                    columns === 'cardC3') &&
                                      <ContentEditable
                                        data-column='columnTwo'
                                        data-row={item.id}
                                        html={item.columnTwo.markup}
                                        className='cell'
                                        placeholder='To write...'
                                        onPaste={pasteAsPlainText}
                                        onFocus={highlightAll}
                                        onChange={handleContentUpdate}
                                        onKeyDown={handlerOnKeyDown}
                                      />}
                            {columns === 'cardC3' &&
                              <ContentEditable
                                data-column='columnThree'
                                data-row={item.id}
                                html={item.columnThree.markup}
                                className='cell'
                                placeholder='To write...'
                                onPaste={pasteAsPlainText}
                                onFocus={highlightAll}
                                onChange={handleContentUpdate}
                                onKeyDown={handlerOnKeyDown}
                              />}
                          </div>
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
    </div>
  )
}
