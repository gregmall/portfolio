import React from 'react'
import styles from './Header.css'




export default function Header(){
  
  
  return (
    <>
    <header className={styles.header}>
      <a href="/">
      <ul>
      <li><h1>Greg Mall</h1></li>
      <li><h4>Software Engineer</h4></li>
      </ul>
      </a>
      
    
      
      <div className={styles.nav}>

   
   <ul >
            <li><a href="/techstack">Techstack</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/bio">Bio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/files/Greg-Mall-Resume.pdf" target ="blank">Resume</a></li>
            
          </ul>
    </div>
      
  
    </header>
    
    </>
  )
}


