import React from 'react'
import { initialSheetSetting } from '../../dictionary/baseConfig'

import S1 from '../../asset/images/config/card-style1.png'
import S2 from '../../asset/images/config/card-style2.png'
import S3 from '../../asset/images/config/card-style3.png'

import '../../styles/cheatsheet/create-content.scss'
import { fetchPromises } from '../../helpers/fetch'

function CreateContent ({ idCheatsheet }) {
  const createSheet = (initialSetting) => {
    fetchCreateSheet({
      idCheatsheet: idCheatsheet,
      config: initialSetting
    })
  }

  const fetchCreateSheet = async (sheet) => {
    console.log(sheet)
    const resp = await fetchPromises('sheet/create', sheet, 'POST')
    const respJson = await resp.json()
    const { ok, data } = respJson

    if (ok) {
      console.log('Sheet creado', data)
    }
  }

  return (
    <div className='create-content'>
      <p>Crear contenido</p>
      <div className='templates'>
        <div className='item' onClick={() => createSheet(initialSheetSetting.styleOne)}>
          <img src={S1} alt='two column' />
        </div>
        <div className='item' onClick={() => createSheet(initialSheetSetting.styleTwo)}>
          <img src={S2} alt='two column' />
        </div>
        <div className='item' onClick={() => createSheet(initialSheetSetting.styleThree)}>
          <img src={S3} alt='two column' />
        </div>
      </div>
    </div>
  )
}

export default CreateContent
