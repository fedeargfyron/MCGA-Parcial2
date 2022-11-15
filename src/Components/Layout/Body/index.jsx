

import React from 'react'
import styles from './body.module.css'

const Body = ({children}) => {
  return (
    <div className={styles.body}>
        Cuerpo
        {children}
    </div>
  );
}

export default Body