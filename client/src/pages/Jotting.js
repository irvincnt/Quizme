import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addSettings, addTitle } from '../actions/jotting'
import Setting from '../components/jotting/setting'
import { Editor } from '../components/sheet/Editor'
import Skeleton from '../components/ui/Skeleton'
import { fetchWithToken } from '../helpers/fetch'

import '../styles/pages/jotting.scss'

function Jotting () {
  const dispatch = useDispatch()
  const [loader, setloader] = useState(true)
  const { cheatsheetId, sheetId } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`sheet/${sheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        const { settings, title } = data.sheet
        setloader(false)
        dispatch(addSettings(settings))
        dispatch(addTitle(title))
        console.log('SHEET', data)
      } else {
        history.push('/home')
      }
    }
    fetchData()
  }, [cheatsheetId, sheetId])

  return (
    <div className='jotting'>
      <div className='jotting-head'>
        <span>icono</span>
        <Setting />
        <div className='actions'>botones</div>
      </div>
      {!loader && <Editor />}
      {
        loader &&
          <div className='wrapper-skeleton'>
            <Skeleton />
          </div>
      }
    </div>
  )
}

export default Jotting
