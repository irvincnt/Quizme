import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'
// import ContentEditable from 'react-contenteditable'

import editpencil from '../../asset/icons/paintbrush.svg'
import '../../styles/pages/sheet.scss'
import { Check } from 'phosphor-react'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'
import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import OneX from '../../asset/images/config/1x.png'
import TwoX from '../../asset/images/config/2x.png'
import threeX from '../../asset/images/config/3x.png'

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
          <div className='columns parent'>
            <div className='children show'>
              <img src={cardC1} alt='one column' />
            </div>
            <div className='children hide'>
              <img src={cardC2} alt='two column' />
            </div>
            <div className='children hide'>
              <img src={cardC3} alt='three column' />
            </div>
          </div>
        </div>
        <div className='items'>
          <p>Estilos</p>
          <div className='styles parent'>
            <div className='children hide'>
              <img src={cardS1} alt='one column' />
            </div>
            <div className='children show'>
              <img src={cardS2} alt='two column' />
            </div>
            <div className='children hide'>
              <img src={cardS3} alt='three column' />
            </div>
          </div>
        </div>
        <div className='items'>
          <p>Tipos</p>
          <div className='types parent'>
            <div className='children hide'>
              <img src={cardS33Ca} alt='one column' />
            </div>
            <div className='children hide'>
              <img src={cardS33Cb} alt='two column' />
            </div>
            <div className='children show'>
              <img src={cardS33Cc} alt='three column' />
            </div>
          </div>
        </div>
        <div className='items'>
          <p>Colores</p>
          <div className='colors parent-color'>
            <div className='children-color hide'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle blue' />
            </div>
            <div className='children-color show'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle red' />
            </div>
            <div className='children-color hide'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle yellow' />
            </div>
            <div className='children-color hide'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle green' />
            </div>
            <div className='children-color hide'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle purple' />
            </div>
            <div className='children-color hide'>
              <Check size={22} color='#f7f7f8' weight='bold' className='check' />
              <div className='circle dark' />
            </div>
          </div>
        </div>
        <div className='items'>
          <p>Tamaño</p>
          <div className='sizes parent'>
            <div className='size children hide'>
              <img src={OneX} alt='1x' />
              <p>1x</p>
            </div>
            <div className='size children hide'>
              <img src={TwoX} alt='2x' />
              <p>2x</p>
            </div>
            <div className='size children show'>
              <img src={threeX} alt='3x' />
              <p>3x</p>
            </div>
          </div>
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
