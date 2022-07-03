import styles from './../styles/signup.module.scss';
import { FormGroup, Input, Button } from '@mui/material';
import { useState } from 'react';
import { createUser } from './api/users';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>create your account with us</div>
      <form>
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
            onClick={(e) => handleSubmit(e)}
          >
            sign up
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default SignUp;
