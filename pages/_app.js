import Layout from './../components/Layout';
import '../styles/globals.scss';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { loggedInUser, firstLoad } from './api/contexts';
import { auth } from '../firebase-config';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [firstLoadScreen, setFirstLoadingScreen] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setFirstLoadingScreen(false);
    });
  }, [setUser]);

  return (
    <React.StrictMode>
      <firstLoad.Provider value={firstLoadScreen}>
        <loggedInUser.Provider value={{ user, setUser }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </loggedInUser.Provider>
      </firstLoad.Provider>
    </React.StrictMode>
  );
}

export default MyApp;
