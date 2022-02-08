import React from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { initialSheetSetting } from '../../dictionary/baseConfig'
import { fetchPromises } from '../../helpers/fetch'

import S1 from '../../asset/images/config/card-style1.png'
import S2 from '../../asset/images/config/card-style2.png'
import S3 from '../../asset/images/config/card-style3.png'

function CreateSheet ({ idCheatsheet }) {
  const history = useHistory()
  const createSheet = (initialSetting) => {
    const myPromise = fetchCreateSheet({
      idCheatsheet: idCheatsheet,
      config: initialSetting
    })

    toast.promise(myPromise, {
      loading: 'Creando contenido',
      success: 'Contenido creado correctamente',
      error: 'Error al crear contenido'
    })
  }

  const fetchCreateSheet = async (sheet) => {
    console.log(sheet)
    const resp = await fetchPromises('sheet/create', sheet, 'POST')
    const respJson = await resp.json()
    const { ok, data } = respJson

    if (ok) {
      const { id: idSheet } = data.sheet
      history.push(`/cheatsheet/${idCheatsheet}/content/${idSheet}`)
    }
  }

  return (
    <div className='create-jottings'>
      <p>Crea un apunte</p>
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

export default CreateSheet
