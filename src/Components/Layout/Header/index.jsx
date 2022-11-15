import React from 'react'
import styles from './header.module.css'
const Header = () => {
console.log(styles.header);
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Arrón Forms</h1>
    </header>
  );
}

export default Header