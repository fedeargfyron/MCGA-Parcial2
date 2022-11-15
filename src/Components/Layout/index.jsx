import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import styles from './layout.module.css'
const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className={styles.bodyLayout}>
        <Navbar />
        <Body children={children} />
      </div>
      <Footer />
    </div>
  );
}

export default Layout