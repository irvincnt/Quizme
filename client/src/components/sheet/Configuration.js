import React, { useState } from 'react'
import classNames from 'classnames'
import { Check } from 'phosphor-react'

import cardC1 from '../../asset/images/config/card-1c.png'
import cardC2 from '../../asset/images/config/card-2c.png'
import cardC3 from '../../asset/images/config/card-3c.png'
import cardS1 from '../../asset/images/config/card-style1.png'
import cardS2 from '../../asset/images/config/card-style2.png'
import cardS3 from '../../asset/images/config/card-style3.png'

import OneX from '../../asset/images/config/1x.png'
import TwoX from '../../asset/images/config/2x.png'
import threeX from '../../asset/images/config/3x.png'

import cardS33Ca from '../../asset/images/config/cardS3/card-s3-3c-a.png'
import cardS33Cb from '../../asset/images/config/cardS3/card-s3-3c-b.png'
import cardS33Cc from '../../asset/images/config/cardS3/card-s3-3c-c.png'

function Configuration () {
  const [config, setConfig] = useState({
    columns: 'cardC2',
    styles: 'cardS1',
    types: '',
    colors: 'dark',
    sizes: '2x'
  })

  const handlerConfig = (newConfig) => {
    console.log('newConfig', newConfig)
    setConfig(prevState => {
      return { ...prevState, ...newConfig }
    })
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
        <div className='types parent'>
          <div className='children hide'>
            <img src={cardS33Ca} alt='one column' />
          </div>
          <div className='children hide'>
            <img src={cardS33Cb} alt='two column' />
          </div>
          <div className='children show'>
            <img src={cardS33Cc} alt='three column' />
          </div>
        </div>
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
            className={`size children ${config.sizes === '1x' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: '1x' })}
          >
            <img src={OneX} alt='1x' />
            <p>1x</p>
          </div>
          <div
            className={`size children ${config.sizes === '2x' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: '2x' })}
          >
            <img src={TwoX} alt='2x' />
            <p>2x</p>
          </div>
          <div
            className={`size children ${config.sizes === '3x' ? 'show' : 'hide'}`}
            onClick={() => handlerConfig({ sizes: '3x' })}
          >
            <img src={threeX} alt='3x' />
            <p>3x</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuration
