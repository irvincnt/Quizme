import React from 'react'
import { Check } from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { setConfigSheet } from '../../actions/sheet'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'
import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import OneX from '../../asset/images/config/1x.png'
import TwoX from '../../asset/images/config/2x.png'
import threeX from '../../asset/images/config/3x.png'

import cardS1C1a from '../../asset/images/config/cardS1/card-s1-c1-a.png'
import cardS1C2a from '../../asset/images/config/cardS1/card-s1-c2-a.png'
import cardS1C2b from '../../asset/images/config/cardS1/card-s1-c2-b.png'
import cardS1C2c from '../../asset/images/config/cardS1/card-s1-2c-c.png'
import cardS1C3a from '../../asset/images/config/cardS1/card-s1-3c-a.png'
import cardS1C3b from '../../asset/images/config/cardS1/card-s1-3c-b.png'
import cardS1C3c from '../../asset/images/config/cardS1/card-s1-c3-c.png'

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

const TypeS1 = ({ config, selectConfig }) => {
  const { columns, styles } = config

  const handlerSelectConfig = (newConfig) => {
    selectConfig(newConfig)
  }

  return (
    <>
      {columns === 'cardC1' && styles === 'cardS1' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS1C1a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C1a' })}
          >
            <img src={cardS1C1a} alt='one column' />
          </div>
        </div>)}

      {columns === 'cardC2' && styles === 'cardS1' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS1C2a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C2a' })}
          >
            <img src={cardS1C2a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS1C2b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C2b' })}
          >
            <img src={cardS1C2b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS1C2c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C2c' })}
          >
            <img src={cardS1C2c} alt='three column' />
          </div>
        </div>)}

      {columns === 'cardC3' && styles === 'cardS1' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS1C3a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C3a' })}
          >
            <img src={cardS1C3a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS1C3b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C3b' })}
          >
            <img src={cardS1C3b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS1C3c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS1C3c' })}
          >
            <img src={cardS1C3c} alt='three column' />
          </div>
        </div>)}
    </>
  )
}

function TypeS2 ({ config, selectConfig }) {
  const { columns, styles } = config

  const handlerSelectConfig = (newConfig) => {
    selectConfig(newConfig)
  }
  return (
    <>
      {columns === 'cardC1' && styles === 'cardS2' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS2C1a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C1a' })}
          >
            <img src={cardS2C1a} alt='one column' />
          </div>
        </div>)}

      {columns === 'cardC2' && styles === 'cardS2' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS2C2a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C2a' })}
          >
            <img src={cardS2C2a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS2C2b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C2b' })}
          >
            <img src={cardS2C2b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS2C2c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C2c' })}
          >
            <img src={cardS2C2c} alt='three column' />
          </div>
        </div>)}

      {columns === 'cardC3' && styles === 'cardS2' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS2C3a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C3a' })}
          >
            <img src={cardS2C3a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS2C3b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C3b' })}
          >
            <img src={cardS2C3b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS2C3c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS2C3c' })}
          >
            <img src={cardS2C3c} alt='three column' />
          </div>
        </div>)}
    </>
  )
}

function TypeS3 ({ config, selectConfig }) {
  const { columns, styles } = config

  const handlerSelectConfig = (newConfig) => {
    selectConfig(newConfig)
  }

  return (
    <>
      {columns === 'cardC1' && styles === 'cardS3' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS3C1a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C1a' })}
          >
            <img src={cardS3C1a} alt='one column' />
          </div>
        </div>)}

      {columns === 'cardC2' && styles === 'cardS3' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS3C2a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C2a' })}
          >
            <img src={cardS3C2a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS3C2b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C2b' })}
          >
            <img src={cardS3C2b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS3C2c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C2c' })}
          >
            <img src={cardS3C2c} alt='three column' />
          </div>
        </div>)}

      {columns === 'cardC3' && styles === 'cardS3' && (
        <div className='types parent'>
          <div
            className={`children ${config.types === 'cardS3C3a' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C3a' })}
          >
            <img src={cardS3C3a} alt='two column' />
          </div>
          <div
            className={`children ${config.types === 'cardS3C3b' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C3b' })}
          >
            <img src={cardS3C3b} alt='three column' />
          </div>
          <div
            className={`children ${config.types === 'cardS3C3c' ? 'show' : 'hide'}`}
            onClick={() => handlerSelectConfig({ types: 'cardS3C3c' })}
          >
            <img src={cardS3C3c} alt='three column' />
          </div>
        </div>)}
    </>
  )
}

function Structure () {
  const { currentSheet: { config } } = useSelector(state => state.sheet)
  const dispatch = useDispatch()

  const handlerConfig = (newConfig) => {
    dispatch(setConfigSheet({ ...config, ...newConfig }))
  }

  return (
    <div className='config'>
      <div className='items'>
        <p>Columnas</p>
        <div className='columns parent'>
          <div
            className={`children ${config.columns === 'cardC1' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ columns: 'cardC1' })}
          >
            <img src={cardC1} alt='one column' />
          </div>
          <div
            className={`children ${config.columns === 'cardC2' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ columns: 'cardC2' })}
          >
            <img src={cardC2} alt='two column' />
          </div>
          <div
            className={`children ${config.columns === 'cardC3' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ columns: 'cardC3' })}
          >
            <img src={cardC3} alt='three column' />
          </div>
        </div>
      </div>
      <div className='items'>
        <p>Estilos</p>
        <div className='styles parent'>
          <div
            className={`children ${config.styles === 'cardS1' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ styles: 'cardS1' })}
          >
            <img src={cardS1} alt='one column' />
          </div>
          <div
            className={`children ${config.styles === 'cardS2' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ styles: 'cardS2' })}
          >
            <img src={cardS2} alt='two column' />
          </div>
          <div
            className={`children ${config.styles === 'cardS3' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ styles: 'cardS3' })}
          >
            <img src={cardS3} alt='three column' />
          </div>
        </div>
      </div>
      <div className='items'>
        <p>Tipos</p>
        <TypeS1 config={config} selectConfig={handlerConfig} />
        <TypeS2 config={config} selectConfig={handlerConfig} />
        <TypeS3 config={config} selectConfig={handlerConfig} />
      </div>
      <div className='items'>
        <p>Colores</p>
        <div className='colors parent-color'>
          <div
            className={`children-color ${config.colors === 'blue' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'blue' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle blue' />
          </div>
          <div
            className={`children-color ${config.colors === 'red' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'red' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle red' />
          </div>
          <div
            className={`children-color ${config.colors === 'yellow' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'yellow' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle yellow' />
          </div>
          <div
            className={`children-color ${config.colors === 'green' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'green' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle green' />
          </div>
          <div
            className={`children-color ${config.colors === 'purple' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'purple' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle purple' />
          </div>
          <div
            className={`children-color ${config.colors === 'dark' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ colors: 'dark' })}
          >
            <Check size={22} color='#f7f7f8' weight='bold' className='check' />
            <div className='circle dark' />
          </div>
        </div>
      </div>
      <div className='items'>
        <p>Tamaño</p>
        <div className='sizes parent'>
          <div
            className={`size children ${config.sizes === 'x' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: 'x' })}
          >
            <img src={OneX} alt='1x' />
            <p>1x</p>
          </div>
          <div
            className={`size children ${config.sizes === 'xx' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: 'xx' })}
          >
            <img src={TwoX} alt='2x' />
            <p>2x</p>
          </div>
          <div
            className={`size children ${config.sizes === 'xxx' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: 'xxx' })}
          >
            <img src={threeX} alt='3x' />
            <p>3x</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure
