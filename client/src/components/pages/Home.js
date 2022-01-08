import React, { useEffect, useState } from 'react'
import { fetchWithToken } from '../../helpers/fetch'
import PerfilCard from '../ui/Perfil-card'

import '../../styles/pages/home.scss'

function Home () {
  const [stateHome, setHome] = useState({ ok: false, allCheatSheets: [] })

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken('home/')
      const body = await resp.json()

      setHome(body)
    }
    fetchData()
  }, [])

  return (
    <div className='container-fluid home'>
      <h1>Home</h1>
      <PerfilCard />
      <hr />
      <div className='cheatsheet-list'>
        {
          stateHome.allCheatSheets.map(item => {
            return (
              <div key={item.id} className='card cheatsheet'>
                <span>{item.title}</span>
                <p>{item.permissions}</p>
                <p>{item.author.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
