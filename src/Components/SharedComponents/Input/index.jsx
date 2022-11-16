import React from 'react'
import styles from './input.module.css'
const Input = ({type, placeholder, requiredTags, register, inputName}) => {
  return ( 
    <input
    type={type}
    placeholder={placeholder}
    className={styles.input}
    {...register(inputName, requiredTags)}
    />
  )
}

export default Input