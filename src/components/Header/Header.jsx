import React from 'react'
import styles from './Header.css'

const Header = () =>{
  return (
    <header className={styles.header}>
   <nav role='navigation'>
  <a href="#0">Projects</a>
  <a href="#0">Bio</a>
  <a href="#0">Contact</a>
  
</nav>  
    </header>
  )
}
export default Header;

