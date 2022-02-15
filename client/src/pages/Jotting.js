import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { X } from 'phosphor-react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { loadInitialContent } from '../actions/jotting'
import Setting from '../components/jotting/setting'
import { Editor } from '../components/sheet/Editor'
import Skeleton from '../components/ui/Skeleton'
import { fetchPromises, fetchWithToken } from '../helpers/fetch'

import '../styles/pages/jotting.scss'
import logo from '../asset/icons/logo.svg'
import toast, { Toaster } from 'react-hot-toast'

function Jotting () {
  const dispatch = useDispatch()
  const { currentJotting } = useSelector(state => state.jotting)
  const [loader, setloader] = useState(true)
  const { cheatsheetId, sheetId } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`sheet/${sheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        const { settings, title, favorite, rows } = data.sheet
        setloader(false)
        dispatch(loadInitialContent({ title, favorite, settings, rows }))
        console.log('SHEET', data)
      } else {
        history.push('/home')
      }
    }
    fetchData()
  }, [cheatsheetId, sheetId])

  const handlerUpdate = () => {
    const myPromise = fetchUpdateJotting({ id: sheetId, ...currentJotting })

    toast.promise(myPromise, {
      loading: 'Updating...',
      success: 'Jotting updated',
      error: 'Error updating jotting'
    })
  }

  const fetchUpdateJotting = async (jotting) => {
    const resp = await fetchPromises('sheet/update', jotting, 'PUT')
    const respJson = await resp.json()
    const { ok, data } = respJson
    if (ok) {
      console.log('DATA', data)
    }
  }

  return (
    <div className='jotting'>
      <div className='jotting-head'>
        <Link to='/home'>
          <img src={logo} alt='logotipo' />
        </Link>
        <Setting />
        <div className='actions'>
          <button
            className='btn btn-primary'
            onClick={handlerUpdate}
          >
            Actualizar
          </button>
          <X size={20} weight='bold' />
        </div>
      </div>
      {!loader && <Editor />}
      {
        loader &&
          <div className='wrapper-skeleton'>
            <Skeleton />
          </div>
      }
      <Toaster />
    </div>
  )
}

export default Jotting
