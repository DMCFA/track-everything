import styles from './../styles/Nav.module.scss';
import { Typography, ButtonGroup, Button } from '@mui/material';

const Nav = () => {
  const isLoggedIn = true;

  return (
    <div className={styles.container}>
      <Typography align='left' className={styles.title}>
        track everything
      </Typography>
      {isLoggedIn ? (
        <ButtonGroup className={styles['btn-grp']}>
          <Button variant='contained' className={styles.btn}>
            your account
          </Button>
          <Button variant='contained' className={styles.btn}>
            logout
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup className={styles['btn-grp']}>
          <Button className={[styles['signup-btn'], styles.btn].join(' ')}>
            sign up
          </Button>
          <Button variant='contained' className={styles.btn}>
            login
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default Nav;
