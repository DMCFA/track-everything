import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './../styles/Nav.module.scss';
import { Typography, ButtonGroup, Button } from '@mui/material';
import { loggedInUser } from '../pages/api/context';
import { useContext } from 'react';

const Nav = () => {
  const router = useRouter();
  const user = useContext(loggedInUser);

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/login');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push('/signup');
  };

  return (
    <div className={styles.container}>
      <Link href='/' passHref>
        <Typography align='left' className={styles.title}>
          track everything
        </Typography>
      </Link>
      {user != null ? (
        <ButtonGroup className={styles['btn-grp']}>
          <Button variant='contained' className={styles.btn}>
            my shows
          </Button>
          <Button variant='contained' className={styles.btn}>
            {`${user.email} Account`}
          </Button>
          <Button
            variant='contained'
            className={styles.btn}
            onClick={handleLogout}
          >
            logout
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup className={styles['btn-grp']}>
          <Button
            className={[styles['signup-btn'], styles.btn].join(' ')}
            onClick={handleSignUp}
          >
            sign up
          </Button>
          <Button
            variant='contained'
            className={styles.btn}
            onClick={handleLogin}
          >
            login
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default Nav;
