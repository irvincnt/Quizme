import React from 'react'
import '../../styles/ui/elements.scss'

export default function Spinner ({ width = 15, height = 15 }) {
  return (
    <>
      <svg className='spinner' width={width} height={height} viewBox='0 0 50 50'>
        <circle className='path' cx='25' cy='25' r='20' fill='none' stroke-width='5' />
      </svg>
    </>
  )
}
