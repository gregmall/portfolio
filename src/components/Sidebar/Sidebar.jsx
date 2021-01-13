import React from 'react'
import styles from './Sidebar.css'
export default function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
      <ul className={styles.title}>
   <h1>Greg Mall</h1>
   <h4>Software Engineer</h4>
   </ul>
    <nav className={styles.nav}>
      <ul>
        <li className={styles.active}><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/bio">Bio</a></li>
        <li><a href="/contact">Contact</a></li>
        
      </ul>
    </nav>
  </aside>

    </div>
  )
}

