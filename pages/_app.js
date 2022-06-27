import Layout from './../components/Layout';
import '../styles/globals.scss';
import React, { createContext, useState } from 'react';
import { auth, onAuthStateChanged } from 'firebase/auth';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default MyApp;
