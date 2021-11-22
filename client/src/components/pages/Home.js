import React, { useEffect, useState } from 'react'
import { fetchWithToken } from '../../helpers/fetch'
import PerfilCard from '../ui/Perfil-card'

function Home () {
  const [stateHome, setHome] = useState({ ok: false, allCheatSheets: [] })

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken('home/')
      const body = await resp.json()

      console.log(body)
      setHome(body)
    }
    fetchData()
  }, [])

  return (
    <div className='container-fluid'>
      <h1>Home</h1>
      <PerfilCard />
      <hr />
      hola
      {
        stateHome.allCheatSheets.map(item => {
          return (
            <p key={item.id}>{item.title}</p>
          )
        })
      }
    </div>
  )
}

export default Home
