import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPromises, fetchWithToken } from '../../helpers/fetch'
import Modal from '../ui/Modal'

function Jottings ({ cheatsheetId }) {
  const modal = useRef(null)
  const [allJottings, setAllJottings] = useState([])
  const [recharge, setRecharge] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}/sheets`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        setAllJottings(data.sheets)
      }
    }
    fetchData()
  }, [cheatsheetId, recharge])

  const fetchDeleteSheet = async (uid) => {
    const resp = await fetchPromises('sheet/delete', { uid }, 'DELETE')
    const respJson = await resp.json()
    if(respJson.ok) setRecharge(!recharge)
  }

  return (
    <div className='jottings'>
      <div className='list'>
        {
          allJottings.map(item => {
            return (
              <div key={item.id} className='card'>
                <Link to={`/cheatsheet/${item.cheatsheet}/content/${item.id}`}>
                  <span>{item.title || 'sin título'}</span>
                </Link>
                <p>{item.created}</p>
                <p>{item.updated}</p>
                <ItemModal item={item} fetchDeleteSheet={fetchDeleteSheet}/>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

function ItemModal ({item, fetchDeleteSheet }) {
  const modal = useRef()
  return (
    <>
      <p onClick={() => modal.current.open()}>Eliminar</p>
      <Modal ref={modal}>
        <>
          <p>{`¿Estás seguro de eliminar el apunte ${item.title}?`}</p>
          <div className='flex justify-content-between'>
            <button className='btn' onClick={() => modal.current.close()}>Cancelar</button>
            <button className='btn btn-primary' onClick={() => fetchDeleteSheet(item.id)}>Eliminar apunte</button>
          </div>
        </>
      </Modal>
      
    </>
  )
}

export default Jottings
