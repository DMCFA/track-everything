// import { useForm } from 'react-hook-form';
import styles from './../styles/Login.module.scss';
import { FormGroup, Input, Button } from '@mui/material';

const Login = () => {
  const handleChange = (e) => console.log(e.target.value);
  const handleSubmit = (e) => console.log(e);
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <FormGroup className={styles['input-group']}>
          <Input
            type='email'
            autoFocus
            required
            placeholder='Email goes here'
            onChange={handleChange}
          />
          <Input type='password' required placeholder='Your password' />
          <Button className={styles.button}>Login</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Login;
