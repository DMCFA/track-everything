import { useState, useEffect, createContext } from 'react';
import { getUsers } from './api/users';
import { getPopularShows } from './api/shows';
import styles from './../styles/Home.module.scss';

//components
import Hello from './../components/Hello';
import Loading from '../components/Loading';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPopularShows().then((results) => setShows(results));
    setIsLoading(false);
  }, []);
  return <>{isLoading ? <Loading /> : <Hello shows={shows} />}</>;
};

export default Home;
