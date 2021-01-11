import React from 'react'
import styles from './Contact.css';
export default function Contact() {
  return (
    <div className = {styles.Contact}>
      <div className = {styles.grow}>
      
      <div className={styles.box}><a href="https://github.com/gregmall" target="blank"><img src="https://visualpharm.com/assets/624/Github-595b40b85ba036ed117dc155.svg" /><span>GITHUB</span></a></div>
      <div className={styles.box}><a href="https://www.linkedin.com/in/greg-mall-3032771b1/" target="blank"><img src="https://www.flaticon.com/svg/static/icons/svg/61/61109.svg" /><span>LINKEDIN</span></a></div>
      <div className={styles.box}><a href="https://twitter.com/GregMall3" target="blank"><img src="https://www.flaticon.com/svg/static/icons/svg/60/60580.svg" /><span>TWITTER</span></a></div>
      <div className={styles.box}><a href="mailto:gregmall157@gmail.com"><img src="https://www.flaticon.com/svg/static/icons/svg/115/115757.svg" /><span>EMAIL</span></a></div>
      
      </div>
    </div>
  )
}
