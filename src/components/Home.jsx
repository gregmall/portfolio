import React from 'react'
import styles from './app/App.css'

export default function Home() {
  return (
    <div className ={styles.home}>
      <div className ={styles.profile}>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6Eg2LF9SJow/profile-displayphoto-shrink_400_400/0/1602718159328?e=1613606400&v=beta&t=cSS7FCA6R_tQrVKI_ll9_zq0K7KS6pslxBY1Qh0enB4"/>
      </div>
      <div className={styles.main}>
      <h1>Full-stack Software Engineer who brings and artist's eye to design. Proficient in React, Vanilla Javascript, Node.js, PostgreSQL, HTML5, CSS3, Express.js</h1>
      </div>
    </div>
  )
}
