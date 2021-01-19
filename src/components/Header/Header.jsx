import React from 'react'
import styles from './Header.css'
import { useParams } from 'react-router-dom'

export default function Header(){
  let { page }  = useParams();
  
  return (
    <header className={styles.header}>
      <p>{page}</p>
      
  
    </header>
  )
}


