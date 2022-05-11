import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DotsThree, PushPin, Heart, Trash, CalendarCheck, Clock} from 'phosphor-react'


import { fetchPromises, fetchWithToken } from '../helpers/fetch'
import Navbar from '../components/ui/Navbar'
import PerfilCard from '../components/ui/Perfil-card'
import Modal from '../components/ui/Modal'
import '../styles/pages/home.scss'

function Home () {
  const [cheatsheets, setCheatSheets] = useState([])
  const [recharge, setRecharge] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken('home/')
      const body = await resp.json()
      const { allCheatSheets, ok } = body

      if (ok) {
        let allCS = allCheatSheets.map((cs, i) => cs[i] = {...cs, open: false})
        setCheatSheets(allCS)
      }
    }
    fetchData()
  }, [recharge])

  const fetchDeleteCheatsheet = async (uid) => {
    const resp = await fetchPromises('cheatsheet/delete', { uid }, 'DELETE')
    const respJson = await resp.json()
    if(respJson.ok) setRecharge(!recharge)
  }

  const showCheatsheetMetadata = (placeId) => {
    let allCheatsheetUpdated = [...cheatsheets]

    allCheatsheetUpdated[placeId] = {
      ...cheatsheets[placeId], 
      open: !cheatsheets[placeId].open
    }
    setCheatSheets(allCheatsheetUpdated)
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
          cheatsheets.map((item, i) => {
            return (
              <div key={item.id} className='cheatsheet'>
                <div className='content'>
                  <div className='head'>
                    <Link to={`/cheatsheet/${item.id}`}>
                      <span>{item.title}</span> <em>Cheatsheet</em>
                    </Link>
                    <div className='actions'>
                      <div className='action'>
                        <DotsThree size={19} onClick={() => showCheatsheetMetadata(i)}/>
                      </div>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className={`${item.open ? 'metadata active' : 'metadata' }`}>
                  <div className='actions'>
                    <div className='action'>
                      <Heart size={19}  />
                      <span>Fav</span>
                    </div>
                    <div className='action'>
                      <PushPin size={19}  />
                      <span>Pin</span>
                    </div>
                    <div className='action'>
                      <DeleteCheatsheeModal cheatsheet={item} fetchDeleteCheatsheet={fetchDeleteCheatsheet}/>
                    </div>
                  </div>
                  <div className='data'>
                    <div className="label">
                      <CalendarCheck size={19}  />
                      <span>Creado</span>
                    </div>
                    <span>{item.created}</span>
                  </div>
                  <div className='data'>
                    <div className="label">
                      <Clock size={19}  />
                      <span>Actualizado</span>
                    </div>
                    <span>{item.updated}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

function DeleteCheatsheeModal ({cheatsheet, fetchDeleteCheatsheet }) {
  const modal = useRef()
  return (
    <>
      <Trash size={19}  />
      <span onClick={() => modal.current.open()}>Delete</span>
      <Modal ref={modal}>
        <>
          <p>{`¿Estás seguro de eliminar el cheatsheet ${cheatsheet.title}?`}</p>
          <div className='flex justify-content-between'>
            <button className='btn' onClick={() => modal.current.close()}>Cancelar</button>
            <button className='btn btn-primary' onClick={() => fetchDeleteCheatsheet(cheatsheet.id)}>Eliminar cheatsheet</button>
          </div>
        </>
      </Modal>
      
    </>
  )
}

export default Home
