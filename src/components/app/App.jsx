import React from 'react';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home';

export default function App() {
  return (
    <Router>
     
    <div className={styles.app}>
    <Header />
    <Home />
  
  </div>
  </Router>
  )
}
