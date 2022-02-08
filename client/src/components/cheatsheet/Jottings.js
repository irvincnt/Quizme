import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchWithToken } from '../../helpers/fetch'

function Jottings ({ cheatsheetId }) {
  const [allJottings, setAllJottings] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}/sheets`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        console.log(data)
        setAllJottings(data.sheets)
      }
    }
    fetchData()
  }, [cheatsheetId])

  return (
    <div className='jottings'>
      <div className='list'>
        {
          allJottings.map(item => {
            return (
              <Link key={item.id} className='card' to={`/cheatsheet/${item.cheatsheet}/content/${item.id}`}>
                <span>{item.title || 'sin título'}</span>
                <p>{item.created}</p>
                <p>{item.updated}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jottings
