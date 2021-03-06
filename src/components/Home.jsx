import React from 'react'
import styles from './app/App.css'

export default function Home() {
  return (
    <>
    <div className={styles.title}>
    <h1>Hello!</h1>
    </div>

    <div className ={styles.home}>
      
      <div className ={styles.profile}>
      <img src="https://avatars3.githubusercontent.com/u/61127092?s=460&u=15e04a694526d54571dbcb76a57bcb0636b52ea4&v=4"/>
      </div>
      <div className={styles.main}>
      <h2>Full-stack software engineer with a passion for creating and technology. A lifelong musician and a professional artist, I bring an artist's eye to solutions and a musician's ability to collaborate on projects.</h2>
      </div>
    </div>
    </>
  )
}
