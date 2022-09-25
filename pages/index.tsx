import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import ImageBlock from '../components/Snippets/ImageBlock';
import ParagraphWithButton from '../components/Snippets/ParagraphWithButton';
import Spacer from '../components/Spacer';
import { getPopularShows } from './api/shows';
import { useMediaQuery } from '../ts/HelperFunctions';
import ThreeCol from '../components/Snippets/ThreeCol';

const Home: NextPage = () => {
  const [shows, setShows] = useState([]);
  const isMobile = useMediaQuery(991);

  useEffect(() => {
    getPopularShows().then((results) => setShows(results));
  }, []);
  return (
    <>
      <Head>
        <title>Track TV</title>
        <meta name='description' content='Track all your TV shows' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <header>
        <Nav />
      </header>

      <main>
        <div className='homepage__main-container'>
          <Spacer height={isMobile ? '2rem' : '8rem'} />
          <div className='homepage__above-container'>
            <ParagraphWithButton />
            <ImageBlock shows={shows} />
          </div>
          <Spacer height={isMobile ? '4rem' : '3rem'} />
          <div className='homepage__lower-container'>
            <ThreeCol />
          </div>
        </div>
      </main>

      <footer />
    </>
  );
};

export default Home;
