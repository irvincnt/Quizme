import React from 'react'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/cheatsheet.scss'

function CheatsheetHeader ({
  getCheatsheetConfig,
  cheatsheetConfig,
  disabledSheet = true
}) {
  const { title, description } = cheatsheetConfig

  const handlerCheatsheetConfig = (config) => {
    getCheatsheetConfig(config)
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
  }

  const handlerResetTitle = () => {
    if (title.length <= 0) {
      handlerCheatsheetConfig({ key: 'title', value: 'Documento sin título' })
    }
  }

  return (
    <div className='ch-header'>
      <div className='title'>
        <ContentEditable
          disabled={!disabledSheet}
          className='label'
          html={title}
          tagName='h1'
          onChange={(el) => handlerCheatsheetConfig({ key: 'title', value: el.target.value })}
          onFocus={highlightAll}
          onBlur={handlerResetTitle}
        />
        {title !== 'Documento sin título' && <em>cheatsheet</em>}
      </div>
      <ContentEditable
        disabled={!disabledSheet}
        className='description'
        html={description}
        tagName='h2'
        onChange={(el) => handlerCheatsheetConfig({ key: 'description', value: el.target.value })}
        onFocus={highlightAll}
      />
    </div>
  )
}

export default CheatsheetHeader
