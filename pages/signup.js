import styles from './../styles/signup.module.scss';
import { FormGroup, Input, Button } from '@mui/material';
import { useState } from 'react';
import { createUser } from './api/users';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    createUser(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>create your account with us</div>
      <form onSubmit={handleSubmit}>
        <FormGroup className={styles['input-group']}>
          <Input
            type='email'
            color='secondary'
            autoFocus
            required
            placeholder='Tell us your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            color='secondary'
            required
            placeholder='Pick your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            color='secondary'
            size='large'
            style={{ fontSize: '1.3rem' }}
            className={styles.button}
          >
            sign up
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default SignUp;
