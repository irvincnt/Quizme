/* eslint-disable quote-props */
import React from 'react'
import classNames from 'classnames'

import '../../styles/ui/elements.scss'

function Alerts (props) {
  const styles = classNames('alert',
    {
      'danger': props.danger,
      'success': props.success,
      'warning': props.warning,
      'info': props.info
    })

  return (
    <div className={styles}>
      {props.label}
    </div>
  )
}

export default Alerts
