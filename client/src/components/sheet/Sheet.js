import React from 'react'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/cheatsheet.scss'
import CreateContent from './CreateContent'

function Sheet ({
  getCheatsheetConfig,
  cheatsheetConfig,
  disabledSheet = true,
  isCreateContent = true
}) {
  const { title, description, id } = cheatsheetConfig

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
    <div className='sheet'>
      <div className='content'>
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
        <hr className='divider' />
        {!isCreateContent && <span className='instruction'>Podrás agregar contenido después de agregar la configuración y crear el CheatSheet</span>}
        {isCreateContent && <CreateContent idCheatsheet={id} />}
      </div>
    </div>
  )
}

export default Sheet
