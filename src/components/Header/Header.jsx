import React from 'react'
import styles from './Header.css'

const Header = () =>{
  return (
    <header className={styles.header}>
   <nav role='navigation'>
  <a href="#0"><button>Projects</button></a>
  <a href="#0"><button>Bio</button></a>
  <a href="#0"><button>Contact</button></a>
  
</nav>  
    </header>
  )
}
export default Header;

