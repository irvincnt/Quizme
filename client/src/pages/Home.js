import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/ui/Navbar'
import PerfilCard from '../components/ui/Perfil-card'
import Modal from '../components/ui/Modal'
import { fetchPromises, fetchWithToken } from '../helpers/fetch'
import '../styles/pages/home.scss'

function Home () {
  const [stateHome, setHome] = useState({ ok: false, allCheatSheets: [] })
  const [recharge, setRecharge] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken('home/')
      const body = await resp.json()

      setHome(body)
    }
    fetchData()
  }, [recharge])

  const fetchDeleteCheatsheet = async (uid) => {
    const resp = await fetchPromises('cheatsheet/delete', { uid }, 'DELETE')
    const respJson = await resp.json()
    if(respJson.ok) setRecharge(!recharge)
  }

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
              <div key={item.id} className='card cheatsheet'>
                <Link to={`/cheatsheet/${item.id}`}>
                  <span>{item.title}</span>
                  <p>{item.permissions}</p>
                  <p>{item.author.name}</p>
                </Link>
                <DeleteModal item={item} fetchDeleteCheatsheet={fetchDeleteCheatsheet}/>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

function DeleteModal ({item, fetchDeleteCheatsheet }) {
  const modal = useRef()
  return (
    <>
      <p onClick={() => modal.current.open()}>Eliminar</p>
      <Modal ref={modal}>
        <>
          <p>{`¿Estás seguro de eliminar el cheatsheet ${item.title}?`}</p>
          <div className='flex justify-content-between'>
            <button className='btn' onClick={() => modal.current.close()}>Cancelar</button>
            <button className='btn btn-primary' onClick={() => fetchDeleteCheatsheet(item.id)}>Eliminar apunte</button>
          </div>
        </>
      </Modal>
      
    </>
  )
}

export default Home
