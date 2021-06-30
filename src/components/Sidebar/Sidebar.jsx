/* eslint-disable max-len */
import React from 'react';
import styles from './Sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
   
        <nav className={styles.nav}>
          
          <ul className={styles.active}>
            <li><a href="/techstack">Techstack</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/bio">Bio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/files/Greg-Mall-Resume.pdf" target ="_blank">Resume</a></li>
          </ul>
        
        </nav>
 
      </aside>
      

    </div>
  );
}

