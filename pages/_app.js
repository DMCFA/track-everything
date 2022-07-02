import Layout from './../components/Layout';
import '../styles/globals.scss';
import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { loggedInUser } from './api/context';
import { auth } from '../firebase-config';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
    setUser(currentUser);
  });

  return (
    <React.StrictMode>
      <loggedInUser.Provider value={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </loggedInUser.Provider>
    </React.StrictMode>
  );
}

export default MyApp;
