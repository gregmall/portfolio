import React from 'react';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function App() {
  return (
    <Router>
     
    <div className={styles.app}>
    <Header />
    <Route exact path="/" component={Home} />
        <Route exact path ="/projects" component= {Projects} />
        <Route exact path ="/bio" component ={Bio} />
        <Route exact path = "/contact" component={Contact} />
   
  
  </div>
  </Router>
  )
}
