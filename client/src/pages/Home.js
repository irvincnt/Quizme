import React, { useEffect, useState } from 'react'
import { fetchWithToken } from '../helpers/fetch'
import PerfilCard from '../components/ui/Perfil-card'

import '../styles/pages/home.scss'
import { Link } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'

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
    <>
      <Navbar />
      <div className='container-fluid home'>
        <h1>Home</h1>
        <PerfilCard />
        <hr />
        <div className='cheatsheet-list'>
          {
          stateHome.allCheatSheets.map(item => {
            return (
              <Link key={item.id} className='card cheatsheet' to={`/cheatsheet/${item.id}`}>
                <span>{item.title}</span>
                <p>{item.permissions}</p>
                <p>{item.author.name}</p>
              </Link>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default Home
