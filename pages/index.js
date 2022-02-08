import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>舞瞳喵的機器人指令空間</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          舞瞳喵的機器人指令空間
        </h1>

        <p className={styles.description}>
          這邊是給舞瞳喵的機器人讀取程式碼的空間。
        </p>

        <div className={styles.grid}>
          <a href="https://www.twitch.tv/sulen0820" className={styles.card}>
            <h2>舞瞳喵</h2>
            <p>舞瞳喵的圖奇實況連結。</p>
          </a>
        </div>
      </main>
    </div>
  )
}
