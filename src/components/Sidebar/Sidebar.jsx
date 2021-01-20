import React from 'react'
import styles from './Sidebar.css'
export default function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
      <ul className={styles.title}>
      
   <li><h1>Greg Mall</h1></li>
   <li><h4>Software Engineer</h4></li>
   </ul>

     
    <nav className={styles.nav}>
      
      <ul className={styles.active}>
        <li ><a href="/">Home</a></li>
        <li><a href="/techstack">Tech Stack</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/bio">Bio</a></li>
        <li><a href="/contact">Contact</a></li>
        
      </ul>
    </nav>
  </aside>

    </div>
  )
}

