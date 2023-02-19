import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>NVG Arquitectura</title>
        </Head>
        <main>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </Layout>
  )
}
