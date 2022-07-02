import { useState } from 'react';
import styles from './../styles/Login.module.scss';
import { FormGroup, Input, Button } from '@mui/material';
import { userLogin } from './api/users';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin(email, password);
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
      <form>
        <FormGroup className={styles['input-group']}>
          <Input
            type='email'
            autoFocus
            required
            placeholder='Email goes here'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            required
            placeholder='Your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className={styles.button} onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Login;
