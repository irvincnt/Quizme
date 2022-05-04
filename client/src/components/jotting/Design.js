import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { DotsThree, Pencil } from 'phosphor-react'

import Modal from '../ui/Modal'

function Design({jutting, placeId, showJottingMetadata}) {
  const {
    rows,
    settings: { design, size, color, columnsType, columns}
  } = jutting
  return (
    <div className={`design ${design} ${size} ${color}`}>
      <div className={`head ${color}`}>
        <JuttingModal jutting={jutting} />
        <div className='actions'>
          <div className="action edit">
            <Link to={`/cheatsheet/${jutting.cheatsheet}/jotting/${jutting.id}`}>
              <Pencil size={17} weight="light" />
            </Link>
          </div>
          <div className="action">
            <DotsThree size={19} onClick={() => showJottingMetadata(placeId)} />
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
  )
}

function JuttingModal ({jutting}) {
  const juttingModal = useRef()

  const {
    rows,
    settings: { design, size, color, columnsType, columns}
  } = jutting
  return (
    <>
      <span 
      className='title'
      onClick={() => juttingModal.current.open()}
      >{jutting.title || 'sin título'}</span>

      <Modal ref={juttingModal}>
      <div className='jutting'>
        <div className={`design ${design} ${size} ${color}`}>
          <div className={`head ${color}`}>
            <span className='title'>{jutting.title || 'sin título'}</span>
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
      </Modal>
    </>
  )
}

export default Design