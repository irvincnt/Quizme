import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { DotsThree, Pencil, DotsThreeOutline } from 'phosphor-react'

import Modal from '../ui/Modal'
import { useSelector } from 'react-redux'

function Design ({ jutting, placeId, showJottingMetadata }) {
  const {
    rows,
    settings: { design, size, color, columnsType, columns },
    cheatsheet: { author, id: cheatsheetID }
  } = jutting

  const { id: authUserId } = useSelector(state => state.auth)

  return (
    <div className={`design ${design} ${size} ${color}`}>
      <div className={`head ${color}`}>
        <JuttingModal jutting={jutting} />
        <div className='actions'>
          {authUserId === author &&
            <div className='action edit'>
              <Link to={`/cheatsheet/${cheatsheetID}/jotting/${jutting.id}`}>
                <Pencil size={17} color='black' weight='light' />
              </Link>
            </div>}
          <div className='action'>
            <DotsThree size={19} onClick={() => showJottingMetadata(placeId)} />
          </div>
        </div>
      </div>
      <div className={`body ${color}`}>
        {rows.map((row, rowIndex) => {
          return (
            <div key={row.id} className={`row ${color} ${rowIndex < 15 ? 'show' : 'hide'}`}>
              <div className={`container-columns ${columnsType}`}>
                {
                      (columns === 'cardC1' ||
                      columns === 'cardC2' ||
                      columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnOne.html || 'na' }} />
                    }

                {
                      (columns === 'cardC2' ||
                      columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnTwo.html || 'na' }} />
                    }

                {
                      (columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnThree.html || 'na' }} />
                    }
              </div>
            </div>
          )
        })}
        {rows.length > 15 && <MoreModal jutting={jutting} />}
      </div>
    </div>
  )
}

function JuttingModal ({ jutting }) {
  const juttingModal = useRef()

  const {
    rows,
    settings: { design, size, color, columnsType, columns }
  } = jutting
  return (
    <>
      <span
        className='title'
        onClick={() => juttingModal.current.open()}
      >{jutting.title || 'sin título'}
      </span>

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
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnOne.html || 'na' }} />
                    }

                      {
                      (columns === 'cardC2' ||
                      columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnTwo.html || 'na' }} />
                    }

                      {
                      (columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnThree.html || 'na' }} />
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

function MoreModal ({ jutting }) {
  const moreModal = useRef()

  const {
    rows,
    settings: { design, size, color, columnsType, columns }
  } = jutting
  return (
    <>
      <div className={`row ${color} more`}>
        <DotsThreeOutline size={17} weight='fill' onClick={() => moreModal.current.open()} />
      </div>

      <Modal ref={moreModal}>
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
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnOne.html || 'na' }} />
                    }

                      {
                      (columns === 'cardC2' ||
                      columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnTwo.html || 'na' }} />
                    }

                      {
                      (columns === 'cardC3') &&
                        <span className='cell' dangerouslySetInnerHTML={{ __html: row.columnThree.html || 'na' }} />
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
