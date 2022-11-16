import React from 'react'
import styles from './inputContainer.module.css'
const InputContainer = ({children, label, errors}) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            {children}
            {errors && 
            <p className={styles.errorLabel}>
                { errors.type === 'required' ? 'Required'
                : errors.type === 'maxLength' ? 'Exceeded maximumn length'
                : errors.type === 'minLength' ? 'Invalid minimum length'
                : errors.type === 'min' ? 'Invalid quantity'
                : 'Invalid characters'}
            </p>}
        </div>
    )
}

export default InputContainer