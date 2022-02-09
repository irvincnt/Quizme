import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CaretDown, CaretUp } from 'phosphor-react'

import Dropdown from '../ui/Dropdown'

import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'

import OneX from '../../asset/images/config/1x.png'
import TwoX from '../../asset/images/config/2x.png'
import threeX from '../../asset/images/config/3x.png'

import cardS1C1a from '../../asset/images/config/cardS4/card-s4-1c-a.png'
import cardS1C2a from '../../asset/images/config/cardS4/card-s4-2c-a.png'
import cardS1C2b from '../../asset/images/config/cardS4/card-s4-2c-b.png'
import cardS1C2c from '../../asset/images/config/cardS4/card-s4-2c-c.png'
import cardS1C3a from '../../asset/images/config/cardS4/card-s4-3c-a.png'
import cardS1C3b from '../../asset/images/config/cardS4/card-s4-3c-b.png'
import cardS1C3c from '../../asset/images/config/cardS4/card-s4-3c-c.png'
import { addSettings } from '../../actions/jotting'

import cardS2C1a from '../../asset/images/config/cardS2/card-s2.png'
import cardS2C2a from '../../asset/images/config/cardS2/card-s2-2c-a.png'
import cardS2C2b from '../../asset/images/config/cardS2/card-s2-2c-b.png'
import cardS2C2c from '../../asset/images/config/cardS2/card-s2-2c-c.png'
import cardS2C3a from '../../asset/images/config/cardS2/card-s2-3c-a.png'
import cardS2C3b from '../../asset/images/config/cardS2/card-s2-3c-b.png'
import cardS2C3c from '../../asset/images/config/cardS2/card-s2-3c-c.png'

import cardS3C1a from '../../asset/images/config/cardS3/card-s3-1c.png'
import cardS3C2a from '../../asset/images/config/cardS3/card-s3-2c-a.png'
import cardS3C2b from '../../asset/images/config/cardS3/card-s3-2c-b.png'
import cardS3C2c from '../../asset/images/config/cardS3/card-s3-2c-c.png'
import cardS3C3a from '../../asset/images/config/cardS3/card-s3-3c-a.png'
import cardS3C3b from '../../asset/images/config/cardS3/card-s3-3c-b.png'
import cardS3C3c from '../../asset/images/config/cardS3/card-s3-3c-c.png'

const ColumnTypeOne = ({ settings, selectSettings }) => {
  const { columns, design, columnsType } = settings

  const handlerColumnTypes = (newSettings) => {
    selectSettings(newSettings)
  }

  return (
    <>
      {columns === 'cardC1' && design === 'cardS1' && (
        <div className='columns-type'>
          <img
            src={cardS1C1a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C1a' })}
            className={`${columnsType === 'cardS1C1a' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC2' && design === 'cardS1' && (
        <div className='columns-type'>
          <img
            src={cardS1C2a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C2a' })}
            className={`${columnsType === 'cardS1C2a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS1C2b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C2b' })}
            className={`${columnsType === 'cardS1C2b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS1C2c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C2c' })}
            className={`${columnsType === 'cardS1C2c' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC3' && design === 'cardS1' && (
        <div className='columns-type'>
          <img
            src={cardS1C3a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C3a' })}
            className={`${columnsType === 'cardS1C3a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS1C3b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C3b' })}
            className={`${columnsType === 'cardS1C3b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS1C3c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS1C3c' })}
            className={`${columnsType === 'cardS1C3c' ? 'isActive' : ''}`}
          />
        </div>)}
    </>
  )
}

const ColumnTypeTwo = ({ settings, selectSettings }) => {
  const { columns, design, columnsType } = settings

  const handlerColumnTypes = (newSettings) => {
    selectSettings(newSettings)
  }

  return (
    <>
      {columns === 'cardC1' && design === 'cardS2' && (
        <div className='columns-type'>
          <img
            src={cardS2C1a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C1a' })}
            className={`${columnsType === 'cardS2C1a' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC2' && design === 'cardS2' && (
        <div className='columns-type'>
          <img
            src={cardS2C2a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C2a' })}
            className={`${columnsType === 'cardS2C2a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS2C2b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C2b' })}
            className={`${columnsType === 'cardS2C2b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS2C2c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C2c' })}
            className={`${columnsType === 'cardS2C2c' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC3' && design === 'cardS2' && (
        <div className='columns-type'>
          <img
            src={cardS2C3a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C3a' })}
            className={`${columnsType === 'cardS2C3a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS2C3b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C3b' })}
            className={`${columnsType === 'cardS2C3b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS2C3c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS2C3c' })}
            className={`${columnsType === 'cardS2C3c' ? 'isActive' : ''}`}
          />
        </div>)}
    </>
  )
}

const ColumnTypeThree = ({ settings, selectSettings }) => {
  const { columns, design, columnsType } = settings

  const handlerColumnTypes = (newSettings) => {
    selectSettings(newSettings)
  }

  return (
    <>
      {columns === 'cardC1' && design === 'cardS3' && (
        <div className='columns-type'>
          <img
            src={cardS3C1a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C1a' })}
            className={`${columnsType === 'cardS3C1a' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC2' && design === 'cardS3' && (
        <div className='columns-type'>
          <img
            src={cardS3C2a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C2a' })}
            className={`${columnsType === 'cardS3C2a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS3C2b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C2b' })}
            className={`${columnsType === 'cardS3C2b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS3C2c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C2c' })}
            className={`${columnsType === 'cardS3C2c' ? 'isActive' : ''}`}
          />
        </div>)}

      {columns === 'cardC3' && design === 'cardS3' && (
        <div className='columns-type'>
          <img
            src={cardS3C3a}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C3a' })}
            className={`${columnsType === 'cardS3C3a' ? 'isActive' : ''}`}
          />
          <img
            src={cardS3C3b}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C3b' })}
            className={`${columnsType === 'cardS3C3b' ? 'isActive' : ''}`}
          />
          <img
            src={cardS3C3c}
            alt='column type'
            onClick={() => handlerColumnTypes({ columnsType: 'cardS3C3c' })}
            className={`${columnsType === 'cardS3C3c' ? 'isActive' : ''}`}
          />
        </div>)}
    </>
  )
}

function Setting () {
  const dispatch = useDispatch()
  const { currentJotting: { settings } } = useSelector(state => state.jotting)
  const { design, columns } = settings
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
        <img
          src={cardS1}
          alt='design type'
          onClick={() => handlerSettings({ design: 'cardS1' })}
          className={`${design === 'cardS1' ? 'isActive' : ''}`}
        />
        <img
          src={cardS2}
          alt='design type'
          onClick={() => handlerSettings({ design: 'cardS2' })}
          className={`${design === 'cardS2' ? 'isActive' : ''}`}
        />
        <img
          src={cardS3}
          alt='design type'
          onClick={() => handlerSettings({ design: 'cardS3' })}
          className={`${design === 'cardS3' ? 'isActive' : ''}`}
        />
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
        <img
          src={cardC1}
          alt='column type'
          onClick={() => handlerSettings({ columns: 'cardC1' })}
          className={`${columns === 'cardC1' ? 'isActive' : ''}`}
        />
        <img
          src={cardC2}
          alt='column type'
          onClick={() => handlerSettings({ columns: 'cardC2' })}
          className={`${columns === 'cardC2' ? 'isActive' : ''}`}
        />
        <img
          src={cardC3}
          alt='column type'
          onClick={() => handlerSettings({ columns: 'cardC3' })}
          className={`${columns === 'cardC3' ? 'isActive' : ''}`}
        />
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
      <>
        <ColumnTypeOne settings={settings} selectSettings={handlerSettings} />
        <ColumnTypeTwo settings={settings} selectSettings={handlerSettings} />
        <ColumnTypeThree settings={settings} selectSettings={handlerSettings} />
      </>
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

  const handlerSettings = (newSetting) => {
    console.log('NEW SETTING', { ...settings, ...newSetting })
    dispatch(addSettings({ ...settings, ...newSetting }))
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
