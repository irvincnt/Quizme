import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPromises, fetchWithToken } from '../../helpers/fetch'

function Jottings ({ cheatsheetId }) {
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
                <p onClick={() => fetchDeleteSheet(item.id)}>Eliminar</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jottings
