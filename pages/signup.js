import styles from './../styles/signup.module.scss';
import { FormGroup, Input, Button } from '@mui/material';

const SignUp = () => {
  const handleChange = (e) => console.log(e.target.value);
  const handleSubmit = (e) => console.log(e);
  return (
    <div className={styles.container}>
      <div className={styles.title}>create your account with us</div>
      <form onSubmit={handleSubmit}>
        <FormGroup className={styles['input-group']}>
          <Input
            type='text'
            color='secondary'
            autoFocus
            required
            placeholder='Choose your username'
            onChange={handleChange}
          />
          <Input
            type='email'
            color='secondary'
            autoFocus
            required
            placeholder='Tell us your email'
            onChange={handleChange}
          />
          <Input
            type='password'
            color='secondary'
            required
            placeholder='Pick your password'
          />
          <Button
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
