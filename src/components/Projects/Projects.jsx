import React from 'react'
import styles from './Projects.css';
export default function Projects() {
  return (
    <div className={styles.home}>
      <div className = {styles.main}>
        <h2>Project Vobot</h2>
        <nav>
          <a href="https://twitter.com/allthebestword1" target="blank">SITE ON TWITTER </a>
          <a href="https://github.com/VTMFOA/VTMFOA" target="blank">GITHUB</a>
         
        </nav>
        <p>A Twitter bot that sends state specific voting information to users via text message or via Tweet. Using the Twit library from the Twitter API I implemented the bot function that replied to Twitter users who tweeted at our bot with a state name. I also created the database of quotes that our bot tweeted using PostgreSQL.</p>
      </div>
      <div className = {styles.main}>
        <h2>What's Cook'n</h2>
        <nav>
        <a href="https://whats-cookn.netlify.app/" target="blank">SITE </a>
        <a href="https://github.com/Aluminum-Chefs" target="blank">GITHUB</a>
        </nav>
        <p>A recipe search and meal planning app that lets the user schedule meals or a week or a month. I worked with a teammate to build the back end of our app using Node, creating the database and endpoints that would serve the front end. I also implemented the calendar using Calendar IO for React.</p>
      </div>
      <div className = {styles.main}>
        <h2>The Canary Project</h2>
        <nav>
          <a href="https://thecanary.netlify.app/" target="blank">SITE </a>
          <a href="https://github.com/The-Canary-Project" target="blank">GITHUB</a>
        </nav>
        <p>Canary is a learning platform that makes virtual learning environments that engage students through movement. This app was built during a week long sprint. We utilized socket.io technology to create a virtual classroom and TensorFlow pose recognition to detect gestures as responses. I was tasked with implementing the calibration page of the app that allowed users to determine what gestures they would use as responses</p>
      </div>
    </div>
  )
}
