import React from 'react'
import Dropdown from '../ui/Dropdown'

import { CaretDown, CaretUp } from 'phosphor-react'

import cardS1 from '../../asset/images/config/card-style1.png'
import cardC1 from '../../asset/images/config/card-1c.png'

function Setting () {
  function headDropdownStyle () {
    return (
      <div className='item'>
        <img src={cardS1} alt='styleone' />
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownStyle () {
    return (
      <div className=''>
        data
      </div>
    )
  }

  function headDropdownColumns () {
    return (
      <div className='item'>
        <img src={cardC1} alt='styleone' />
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownColumns () {
    return (
      <div className=''>
        columnas
      </div>
    )
  }

  return (
    <div className='setting'>
      <Dropdown
        head={headDropdownStyle()}
        content={contentDropdownStyle()}
      />
      <Dropdown
        head={headDropdownColumns()}
        content={contentDropdownColumns()}
      />
    </div>
  )
}

export default Setting
