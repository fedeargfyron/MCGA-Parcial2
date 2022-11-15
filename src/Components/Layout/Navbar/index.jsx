import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
        Item 1
        </li>
        <li className={styles.menuItem}>
        Item 2
        </li>
        <li className={styles.menuItem}>
        Item 3
        </li>
      </ul>
    </div>
  );
}

export default Navbar