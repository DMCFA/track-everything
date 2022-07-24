import { useEffect } from 'react';

const Account = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <h2>Your details</h2>
      <div className={styles.form}>
        <form action=''>
          <label>Your Username</label>
          <input type='text' />
          <label>Your Email</label>
          <input type='text' />
          <label>Change your password</label>
          <input type='password' />
          <button type='submit'>Confirm your changes</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
