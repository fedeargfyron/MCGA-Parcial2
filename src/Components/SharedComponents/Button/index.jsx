import React from 'react'
import styles from './button.module.css'
const Button = ({icon, content, color, background, onClick}) => {
  return ( 
    <button
    style={{
        color: color,
        background: background
    }}
    className={`${styles.button}`}
    onClick={onClick}
    >
        {icon}
        {content}
    </button>
  )
}

export default Button