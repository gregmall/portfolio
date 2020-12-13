import React from 'react';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
    <div className={styles.app}>
  <h1>This is Greg's Portfolio Site.  WELCOME!!! HOPE YOU LIKE HUGE TEXT!</h1>;
  </div>
  </Router>
  )
}
