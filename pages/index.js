import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { getUsers } from './api/users';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Track Everything</title>
        <meta name='description' content='track your favorite tv shows' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
