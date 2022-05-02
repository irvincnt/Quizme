import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { initialJottingSetting } from '../../dictionary/baseConfig'
import { fetchPromises } from '../../helpers/fetch'

import S1 from '../../asset/images/config/card-style1.png'
import S2 from '../../asset/images/config/card-style2.png'
import S3 from '../../asset/images/config/card-style3.png'

function CreateSheet ({ idCheatsheet }) {
  const history = useHistory()

  const fetchCreateJotting = async (initialSetting) => {
    const resp = await fetchPromises('jotting/create', {
      idCheatsheet: idCheatsheet,
      ...initialSetting
    }, 'POST')
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
        <div className='item' onClick={() => fetchCreateJotting(initialJottingSetting.styleOne)}>
          <img src={S1} alt='two column' />
        </div>
        <div className='item' onClick={() => fetchCreateJotting(initialJottingSetting.styleTwo)}>
          <img src={S2} alt='two column' />
        </div>
        <div className='item' onClick={() => fetchCreateJotting(initialJottingSetting.styleThree)}>
          <img src={S3} alt='two column' />
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default CreateSheet
