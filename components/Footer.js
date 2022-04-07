import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import styles from './../styles/Footer.module.scss';

const Footer = () => {
  const [newsletterRequested, setNewsletterRequest] = useState(false);

  const newsletter = (
    <div className={styles.newsletter}>
      <TextField
        id='newsletter'
        size='small'
        label='Sign up for our Newsletter'
        color='secondary'
        variant='outlined'
        type='email'
        // onChange={(e) => validateEmail(e.target.value)}
      />
      <Button
        className={styles.button}
        color='secondary'
        size='large'
        onClick={() => setNewsletterRequest(true)}
      >
        subscribe
      </Button>
    </div>
  );

  const newsletterSubmited = (
    <div className={styles.newsletter}>
      <Typography className={styles.success}>
        thank you for subscribing to our newsletter!
      </Typography>
    </div>
  );
  return (
    <div className={styles.container}>
      {newsletterRequested ? newsletterSubmited : newsletter}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} track everything{' '}
      </div>
      <div className={styles.social}>
        <img src='/facebook.png' alt='facebook logo'></img>
        <img src='/instagram.png' alt='instagram logo'></img>
        <img src='/linkedin.png' alt='linkedin logo'></img>
        <img src='/youtube.png' alt='youtube logo'></img>
        <img src='/github.png' alt='github logo'></img>
      </div>
    </div>
  );
};

export default Footer;
