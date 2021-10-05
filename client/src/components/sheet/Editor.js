import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'
// import ContentEditable from 'react-contenteditable'

import editpencil from '../../asset/icons/paintbrush.svg'
import '../../styles/pages/sheet.scss'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'
import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import cardS33Ca from '../../asset/images/config/cardS3/card-s3-3c-a.png'
import cardS33Cb from '../../asset/images/config/cardS3/card-s3-3c-b.png'
import cardS33Cc from '../../asset/images/config/cardS3/card-s3-3c-c.png'

function Editor () {
  const [isEditable, setEdition] = useState(false)

  const handlerChange = (value) => {
    console.log('onChange keyUp', value)
  }

  const handlerOnBlur = (value) => {
    setEdition(!isEditable)
  }

  const handlerEdition = () => {
    setEdition(!isEditable)
  }
  return (
    <div className='card edition'>
      <div className='flex align-items-center gap-5'>
        <EditableElement
          onChange={handlerChange}
          onBlur={handlerOnBlur}
          disabled={isEditable}
        >
          <h4 className='title' id='title-card'>Sheet title </h4>
        </EditableElement>
        {!isEditable && <img src={editpencil} onClick={handlerEdition} alt='icon editable' />}
      </div>
      <p className='label'>Sheet editor</p>
      <div className='config'>
        <div className='items'>
          <p>Columnas</p>
          <div>
            <img src={cardC1} alt='one column' className='active' />
            <img src={cardC2} alt='two column' />
            <img src={cardC3} alt='three column' />
          </div>
        </div>
        <div className='items'>
          <p>Estilos</p>
          <div>
            <img src={cardS1} alt='one column' />
            <img src={cardS2} alt='two column' className='active' />
            <img src={cardS3} alt='three column' />
          </div>
        </div>
        <div className='items'>
          <p>Tipos</p>
          <div>
            <img src={cardS33Ca} alt='one column' />
            <img src={cardS33Cb} alt='two column' />
            <img src={cardS33Cc} alt='three column' className='active' />
          </div>
        </div>
        <div className='items'>
          <p>Colores</p>
          <div />
        </div>
        <div className='items'>
          <p>Chartseed size</p>
          <div />
        </div>
      </div>
      {/* <ContentEditable
        tagName='pre'
        className='clasico'
        html='<p>Hello <b>World</b> !</p><p>Paragraph 2</p>'
      /> */}
    </div>
  )
}

export default Editor
