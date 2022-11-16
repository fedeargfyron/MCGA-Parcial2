import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to={'/'}>Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to={'/products'}>Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar