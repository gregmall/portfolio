import React from 'react'
import styles from './Header.css'
import { useParams } from 'react-router-dom'

export default function Header(){
  let { page }  = useParams();
  console.log(page)
  return (
    <header className={styles.header}>
      <h1>{page}</h1>
  
    </header>
  )
}


