/* eslint-disable max-len */
import React from 'react';
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
      
        
              <img src="/techs/jslogo.webp"/>
       
              <caption>JavaScript</caption>
        
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/htmllogo.png" />
              <caption>HTML5</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/csslogo.webp" />
              <caption>CSS3</caption>
            </div>
          </div>
          <div className={styles.box}>
            <h2>Frameworks</h2>
            <div className={styles.tooltip}>
              <img src="/techs/reactlogo.png"/>
              <caption>ReactJS</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/nodelogo.webp" />
              <caption>NodeJS</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde424ee15.8061979615260584681513.png" />
              <caption>Redux</caption>
            </div>

          </div>
          <div className={styles.box}>
     
            <h2>Dev Tools</h2>
            <div className={styles.tooltip}>
              <img src="/techs/githublogo.png" />
              <caption>Github</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/herokulogo.webp" />
              <caption>Heroku</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/netlifylogo.png"/>
              <caption>Netlify</caption>
            </div>
          </div>
          <div className={styles.box}>
            <h2>Testing Suites</h2>
            <div className={styles.tooltip}>
              <img src ="/techs/jestlogo.webp"  />
              <caption>Jest</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/quinitlogo.com.png" />
              <caption>QUnit</caption>
            </div>
          </div>
          <div className={styles.box}>
            <h2>Database</h2>
            <div className={styles.tooltip}>
              <img src="/techs/postgresqllogo.webp" />
              <caption>PostgreSQL</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/mysqllogo.webp"/>
              <caption>MySQL</caption>
            </div>
            <div className={styles.tooltip}>
              <img src="/techs/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png"/>
              <caption>Firebase</caption>
            </div>
          </div>
      
      
        </div>
      </div>
    </>
    
  );
}

