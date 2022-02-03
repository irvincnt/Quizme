import React from 'react'

import S1 from '../../asset/images/config/card-style1.png'
import S2 from '../../asset/images/config/card-style2.png'
import S3 from '../../asset/images/config/card-style3.png'

import '../../styles/cheatsheet/create-content.scss'

function CreateContent () {
  return (
    <div className='create-content'>
      <p>Crear contenido</p>
      <div className='templates'>
        <div className='item'>
          <img src={S1} alt='two column' />
        </div>
        <div className='item'>
          <img src={S2} alt='two column' />
        </div>
        <div className='item'>
          <img src={S3} alt='two column' />
        </div>
      </div>
    </div>
  )
}

export default CreateContent
