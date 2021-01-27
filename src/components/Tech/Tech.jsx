import React from 'react'
import styles from './Tech.css';
export default function Tech() {
  return (
    <>
      <div className={styles.title}>
      <h1>Tech Stack</h1>
      </div>
      <div className = {styles.Tech}>
     
      
     
      <div className={styles.content}>
      <div className={styles.box}>
        <h2>Development</h2>
        <div className={styles.tooltip}>
      
        
        <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"/>
       
        <caption>JavaScript</caption>
        
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png" />
        <caption>HTML5</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png" />
        <caption>CSS3</caption>
        </div>
      </div>
      <div className={styles.box}>
        <h2>Frameworks</h2>
        <div className={styles.tooltip}>
        <img src="https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png"/>
        <caption>ReactJS</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png" />
        <caption>NodeJS</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png" />
        <caption>Redux</caption>
        </div>

      </div>
      <div className={styles.box}>
     
        <h2>Dev Tools</h2>
        <div className={styles.tooltip}>
        <img src="https://visualpharm.com/assets/624/Github-595b40b85ba036ed117dc155.svg" />
        <caption>Github</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn.iconscout.com/icon/free/png-512/heroku-225989.png" />
        <caption>Heroku</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png"/>
        <caption>Netlify</caption>
        </div>
      </div>
      <div className={styles.box}>
        <h2>Testing Suites</h2>
        <div className={styles.tooltip}>
        <img src ="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png"  />
        <caption>Jest</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://camo.githubusercontent.com/268d38a4e2d2a7fb1beacd8f8fbed0ae919edc0f13f60d3c10d30d1ec0d797e3/687474703a2f2f692e696d6775722e636f6d2f5935597a6f44752e706e67" />
        <caption>QUnit</caption>
        </div>
      </div>
      <div className={styles.box}>
        <h2>Database</h2>
        <div className={styles.tooltip}>
        <img src="https://cdn.iconscout.com/icon/free/png-512/postgresql-11-1175122.png" />
        <caption>PostgreSQL</caption>
        </div>
        <div className={styles.tooltip}>
        <img src="https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png"/>
        <caption>MySQL</caption>
        </div>
      </div>
      
    </div>
    </div>
    </>
    
  )
}

