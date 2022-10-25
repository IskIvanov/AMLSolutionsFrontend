import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AML UI</title>
        <meta name="description" content="AML UI" />
      </Head>

      <main className={styles.main}>
        <h1>AML UI</h1>
      </main>
    </div>
  );
};

export default Home;
