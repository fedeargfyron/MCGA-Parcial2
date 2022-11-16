import React from 'react'
import styles from './inputContainer.module.css'
const InputContainer = ({children, label, errors}) => {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>{label}</label>
        {children}
        {errors && <p className={styles.inputLabel}>Errores!</p>}
    </div>
  )
}

export default InputContainer