import { useState } from 'react';
import styles from './../styles/Login.module.scss';
import { FormGroup, Input, Button } from '@mui/material';
import { userLogin } from './api/users';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = userLogin(email, password);
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
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
          <Button className={styles.button}>Login</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Login;
