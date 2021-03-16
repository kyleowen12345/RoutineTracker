import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [gian,setGian]=useState('Routine Tracker')
  const clicked=()=>{
    setGian("Gian Love Pier")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Routine-Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{gian}</a>
        </h1>
  <button onClick={clicked}>Click if you are gian</button>
      </main>

      
    </div>
  )
}
