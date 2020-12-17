import React from 'react'
import styles from './app/App.css'

export default function Home() {
  return (
    <div className ={styles.home}>
      <div className ={styles.profile}>
      <img src="https://avatars3.githubusercontent.com/u/61127092?s=460&u=15e04a694526d54571dbcb76a57bcb0636b52ea4&v=4"/>
      </div>
      <div className={styles.main}>
      <h1>Full-stack Software Engineer who brings and artist's eye to design. Proficient in React, Vanilla Javascript, Node.js, PostgreSQL, HTML5, CSS3, Express.js</h1>
      </div>
    </div>
  )
}
