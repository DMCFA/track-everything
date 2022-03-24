import styles from './../styles/Nav.module.scss';
import { Typography, ButtonGroup, Button } from '@mui/material';

const Nav = () => {
  return (
    <div className={styles.container}>
      <Typography align='left' className={styles.title}>
        track everything
      </Typography>
      <ButtonGroup className={styles['btn-grp']}>
        <Button className={[styles['signup-btn'], styles.btn].join(' ')}>
          sign up
        </Button>
        <Button className={styles.btn}>login</Button>
      </ButtonGroup>
    </div>
  );
};

export default Nav;
