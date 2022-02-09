import React from 'react'
import Dropdown from '../ui/Dropdown'

import { CaretDown, CaretUp } from 'phosphor-react'

import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'

import OneX from '../../asset/images/config/1x.png'
import TwoX from '../../asset/images/config/2x.png'
import threeX from '../../asset/images/config/3x.png'

// import cardS1C1a from '../../asset/images/config/cardS4/card-s4-1c-a.png'
import cardS1C2a from '../../asset/images/config/cardS4/card-s4-2c-a.png'
import cardS1C2b from '../../asset/images/config/cardS4/card-s4-2c-b.png'
import cardS1C2c from '../../asset/images/config/cardS4/card-s4-2c-c.png'
// import cardS1C3a from '../../asset/images/config/cardS4/card-s4-3c-a.png'
// import cardS1C3b from '../../asset/images/config/cardS4/card-s4-3c-b.png'
// import cardS1C3c from '../../asset/images/config/cardS4/card-s4-3c-c.png'

// import cardS2C1a from '../../asset/images/config/cardS2/card-s2.png'
// import cardS2C2a from '../../asset/images/config/cardS2/card-s2-2c-a.png'
// import cardS2C2b from '../../asset/images/config/cardS2/card-s2-2c-b.png'
// import cardS2C2c from '../../asset/images/config/cardS2/card-s2-2c-c.png'
// import cardS2C3a from '../../asset/images/config/cardS2/card-s2-3c-a.png'
// import cardS2C3b from '../../asset/images/config/cardS2/card-s2-3c-b.png'
// import cardS2C3c from '../../asset/images/config/cardS2/card-s2-3c-c.png'

// import cardS3C1a from '../../asset/images/config/cardS3/card-s3-1c.png'
// import cardS3C2a from '../../asset/images/config/cardS3/card-s3-2c-a.png'
// import cardS3C2b from '../../asset/images/config/cardS3/card-s3-2c-b.png'
// import cardS3C2c from '../../asset/images/config/cardS3/card-s3-2c-c.png'
// import cardS3C3a from '../../asset/images/config/cardS3/card-s3-3c-a.png'
// import cardS3C3b from '../../asset/images/config/cardS3/card-s3-3c-b.png'
// import cardS3C3c from '../../asset/images/config/cardS3/card-s3-3c-c.png'

function Setting () {
  function headDropdownStyle () {
    return (
      <div className='item'>
        <span>Diseño</span>
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownStyle () {
    return (
      <div className='style'>
        <img src={cardS1} alt='design type' className='isActive' />
        <img src={cardS2} alt='design type' />
        <img src={cardS3} alt='design type' />
      </div>
    )
  }

  function headDropdownColumns () {
    return (
      <div className='item'>
        <span>Columnas</span>
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownColumns () {
    return (
      <div className='columns'>
        <img src={cardC1} alt='column type' className='isActive' />
        <img src={cardC2} alt='column type' />
        <img src={cardC3} alt='column type' />
      </div>
    )
  }

  function headDropdownTypeColumns () {
    return (
      <div className='item'>
        <span>Tipo de columnas</span>
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownTypeColumns () {
    return (
      <div className='columns-type'>
        <img src={cardS1C2a} alt='column type' className='isActive' />
        <img src={cardS1C2b} alt='column type' />
        <img src={cardS1C2c} alt='column type' />
      </div>
    )
  }

  function headDropdownColor () {
    return (
      <div className='item'>
        <span>Color</span>
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownColor () {
    return (
      <div className=''>
        Color
      </div>
    )
  }

  function headDropdownSize () {
    return (
      <div className='item'>
        <span>Tamaño</span>
        <>
          <CaretDown size={15} weight='bold' />
        </>

      </div>
    )
  }

  function contentDropdownSize () {
    return (
      <div className='size'>
        <img src={OneX} alt='column type' className='isActive' />
        <img src={TwoX} alt='column type' />
        <img src={threeX} alt='column type' />
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
      <Dropdown
        head={headDropdownTypeColumns()}
        content={contentDropdownTypeColumns()}
      />
      <Dropdown
        head={headDropdownColor()}
        content={contentDropdownColor()}
      />
      <Dropdown
        head={headDropdownSize()}
        content={contentDropdownSize()}
      />
    </div>
  )
}

export default Setting
