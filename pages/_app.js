import Layout from './../components/Layout';
import '../styles/globals.scss';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { loggedInUser } from './api/context';
import { auth } from '../firebase-config';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [setUser]);

  return (
    <React.StrictMode>
      <loggedInUser.Provider value={{ user, setUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </loggedInUser.Provider>
    </React.StrictMode>
  );
}

export default MyApp;
