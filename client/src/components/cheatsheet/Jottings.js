import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DotsThree, Pencil } from 'phosphor-react'
import { fetchPromises, fetchWithToken } from '../../helpers/fetch'
import Modal from '../ui/Modal'

import '../../styles/ui/editor.scss'

function Jottings ({ cheatsheetId }) {
  const modal = useRef(null)
  const [allJottings, setAllJottings] = useState([])
  const [recharge, setRecharge] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}/jottings`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        setAllJottings(data.sheets)
      }
    }
    fetchData()
  }, [cheatsheetId, recharge])

  const fetchDeleteSheet = async (uid) => {
    const resp = await fetchPromises('jotting/delete', { uid }, 'DELETE')
    const respJson = await resp.json()
    if(respJson.ok) setRecharge(!recharge)
  }

  return (
    <div className='jottings'>
      <div className='list'>
        {
          allJottings.map(jutting => {
            const {
              rows,
              settings: { design, size, color, columnsType, columns}
            } = jutting
            return (
              <div className='jutting ' key={jutting.id}>
                <div className={`design ${design} ${size} ${color}`}>
                  <div className={`head ${color}`}>
                    <span>{jutting.title || 'sin título'}</span>
                    <div className='actions'>
                      <div className="action edit">
                        <Link to={`/cheatsheet/${jutting.cheatsheet}/jotting/${jutting.id}`}>
                          <Pencil size={17} weight="light" />
                        </Link>
                      </div>
                      <div className="action">
                        <DotsThree size={19}  />
                      </div>
                    </div>
                  </div>
                  <div className={`body ${color}`}>
                    {rows.map(row => {
                      return (
                        <div key={row.id} className={`row ${color}`}>
                          <div className={`container-columns ${columnsType}`}>
                            {
                              (columns === 'cardC1' ||
                              columns === 'cardC2' ||
                              columns === 'cardC3') &&
                                <span className='cell' >{row.columnOne}</span>
                            }

                            {
                              (columns === 'cardC2' ||
                              columns === 'cardC3') &&
                                <span className='cell' >{row.columnTwo}</span>
                            }

                            {
                              (columns === 'cardC3') &&
                                <span className='cell' >{row.columnThree}</span>
                            }
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              //   {/* <ItemModal jutting={jutting} fetchDeleteSheet={fetchDeleteSheet}/> */}
            )
          })
        }
        
      </div>
    </div>
  )
}

function ItemModal ({jutting, fetchDeleteSheet }) {
  const modal = useRef()
  return (
    <>
      <p onClick={() => modal.current.open()}>Eliminar</p>
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
