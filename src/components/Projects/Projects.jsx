import React from 'react'
import styles from './Projects.css';
export default function Projects() {
  return (
    <>
    <div className={styles.title}>
      <h1>Projects</h1>
      </div>
    <div className={styles.home}>
      <div className = {styles.main}>
        <h1>Project Vobot</h1>
        <nav>
          <a href="https://twitter.com/allthebestword1" target="blank">SITE ON TWITTER </a>
          <a href="https://github.com/VTMFOA/VTMFOA" target="blank">GITHUB</a>
         
        </nav>
        <img src="https://pbs.twimg.com/media/Ej6oSZdXsAIsN56?format=jpg&name=large" />
        <h4>Techs used: Node, PostgreSQL, Jest, Heroku, Twilio, Twitter</h4>
        <p>A Twitter bot that sends state specific voting information to users via text message or via Tweet. Using the Twit library from the Twitter API I implemented the bot function that replied to Twitter users who tweeted at our bot with a state name. I also created the database of quotes that our bot tweeted using PostgreSQL.</p>
      </div>
      <div className = {styles.main}>
        <h1>What's Cook'n</h1>
        <nav>
        <a href="https://whats-cookn.netlify.app/" target="blank">SITE </a>
        <a href="https://github.com/Aluminum-Chefs" target="blank">GITHUB</a>
        </nav>
        <img src="https://pbs.twimg.com/media/EsdwtDPU4AAmg3R?format=jpg&name=large" />
        <h4>Techs used:  React, Node, Jest, PosrtgreSQL, React Sidenav, Calendar IO</h4>
        <p>A recipe search and meal planning app that lets the user schedule meals or a week or a month. I worked with a teammate to build the back end of our app using Node, creating the database and endpoints that would serve the front end. I also implemented the calendar using Calendar IO for React.</p>
      </div>
      <div className = {styles.main}>
        <h1>The Canary Project</h1>
        <nav>
          <a href="https://thecanary.netlify.app/" target="blank">SITE </a>
          <a href="https://github.com/The-Canary-Project" target="blank">GITHUB</a>
        </nav>
        <img src="https://pbs.twimg.com/media/EsdxN1fVkAAK2gm?format=jpg&name=large" />
        <h4>Techs used:  React, Node, CSS, TensorFlow, Socket.IO</h4>
        <p>Canary is a learning platform that makes virtual learning environments that engage students through movement. This app was built during a week long sprint. We utilized socket.io technology to create a virtual classroom and TensorFlow pose recognition to detect gestures as responses. I was tasked with implementing the calibration page of the app that allowed users to determine what gestures they would use as responses</p>
      </div>
    </div>
    </>
  )
}
