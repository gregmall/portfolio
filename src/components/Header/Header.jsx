import React from 'react'
import styles from './Header.css'

const Header = () =>{
  return (
    <header className={styles.header}>
   <ul className={styles.title}>
   <li><h1>Greg Mall</h1></li>
   <li><h4>Software Engineer</h4></li>
   </ul>
    </header>
  )
}
export default Header;

