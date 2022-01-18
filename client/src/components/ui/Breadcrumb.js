import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ui/elements.scss'

function Breadcrumb ({ content }) {
  return (
    <div className='breadcrumb'>
      <ul>
        {content.map(item => {
          return (
            <li key={item.label}>
              {
                item.open
                  ? <Link to={item.open}>{item.label}</Link>
                  : item.label
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
