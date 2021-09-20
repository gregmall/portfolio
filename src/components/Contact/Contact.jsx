/* eslint-disable max-len */
import React from 'react'
import styles from './Contact.css';
export default function Contact() {
  return (
    <>
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>
      <div className = {styles.Contact}>
      
     
     
        <div className = {styles.grow}>
      
          <div className={styles.box}><a href="https://github.com/gregmall" target="blank"><img src="/techs/github.png" /><span>GITHUB</span></a></div>
          <div className={styles.box}><a href="https://www.linkedin.com/in/greg-mall-he-him-3032771b1/" target="blank"><img src="/techs/linkedin.png" /><span>LINKEDIN</span></a></div>
          <div className={styles.box}><a href="https://twitter.com/GregMall3" target="blank"><img src="/techs/twitter.png" /><span>TWITTER</span></a></div>
          <div className={styles.box}><a href="mailto:gregmall157@gmail.com"><img src="/techs/email.png" /><span>EMAIL</span></a></div>
      
        </div>
      </div>
    </>
  );
}
