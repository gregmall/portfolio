import React from 'react'
import styles from './Header.css'

const Header = () =>{
  return (
    <header className={styles.header}>
   <nav role='navigation'>
  <a href="/projects"><button>Projects</button></a>
  <a href="/bio"><button>Bio</button></a>
  <a href="/contact"><button>Contact</button></a>
  <a href="/"><button>Home</button></a>
  
</nav>  
    </header>
  )
}
export default Header;

