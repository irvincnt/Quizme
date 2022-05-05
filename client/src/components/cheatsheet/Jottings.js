import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CalendarCheck, Clock, Heart, PushPin, Trash } from 'phosphor-react'

import { fetchPromises, fetchWithToken } from '../../helpers/fetch'
import Design from '../jotting/Design'
import Modal from '../ui/Modal'

import '../../styles/ui/editor.scss'

function Jottings ({ cheatsheetId }) {
  const modal = useRef(null)
  const { id: authUserId } = useSelector(state => state.auth)
  const [allJottings, setAllJottings] = useState([])
  const [recharge, setRecharge] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}/jottings`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        let newJottings = data.sheets.map((s, i) => s[i] = {...s, open: false})
        setAllJottings(newJottings)
      }
    }
    fetchData()
  }, [cheatsheetId, recharge])

  const fetchDeleteSheet = async (uid) => {
    const resp = await fetchPromises('jotting/delete', { uid }, 'DELETE')
    const respJson = await resp.json()
    if(respJson.ok) setRecharge(!recharge)
  }

  const showJottingMetadata = (placeId) => {
    let allJottingsUpdated = [...allJottings]

    allJottingsUpdated[placeId] = {
      ...allJottings[placeId], 
      open: !allJottings[placeId].open
    }
    setAllJottings(allJottingsUpdated)
  }

  return (
    <div className='jottings'>
      <h4>Apuntes recientes</h4>
      <div className='list'>
        {
          allJottings.map((jutting, i) => {
            return (
              <div className='jutting' key={jutting.id}>
                <Design jutting={jutting} placeId={i} showJottingMetadata={showJottingMetadata}></Design>
                <div className={`${jutting.open ? 'metadata active' : 'metadata' }`}>
                  <div className='actions'>
                    <div className='action'>
                      <Heart size={19}  />
                      <span>Fav</span>
                    </div>
                    <div className='action'>
                      <PushPin size={19}  />
                      <span>Pin</span>
                    </div>
                    {jutting.cheatsheet.author === authUserId &&
                      <div className='action'>
                      <DeleteJottingModal jutting={jutting} fetchDeleteSheet={fetchDeleteSheet}/>
                      </div>
                    }
                  </div>
                  <div className='data'>
                    <div className="label">
                      <CalendarCheck size={19}  />
                      <span>Creado</span>
                    </div>
                    <span>{jutting.created}</span>
                  </div>
                  <div className='data'>
                    <div className="label">
                      <Clock size={19}  />
                      <span>Actualizado</span>
                    </div>
                    <span>{jutting.updated}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function DeleteJottingModal ({jutting, fetchDeleteSheet }) {
  const modal = useRef()
  return (
    <>
      <Trash size={19}  />
      <span onClick={() => modal.current.open()}>Delete</span>
      <Modal ref={modal}>
        <>
          <p>{`¿Estás seguro de eliminar el apunte ${jutting.title}?`}</p>
          <div className='flex justify-content-between'>
            <button className='btn' onClick={() => modal.current.close()}>Cancelar</button>
            <button className='btn btn-primary' onClick={() => fetchDeleteSheet(jutting.id)}>Eliminar apunte</button>
          </div>
        </>
      </Modal>
      
    </>
  )
}



export default Jottings
