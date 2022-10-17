import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hello from '../components/Hello.js'
import NewConcept from '../components/NewConcept'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fundamental Components example
        </h1>

        <Hello />
        <NewConcept concept="how to get some bitches"/>
        <NewConcept concept={`how to use props`}/>
      </main>
    </div>
  )
}