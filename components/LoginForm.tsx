function LoginForm(): JSX.Element {
  return (
    <div className='login'>
      <div className='login__container'>
        <form action='' method='post'>
          <div className='login__email'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' id='email' />
            </label>
            <span className='forgot-password'>Forgot username?</span>
            <span className='validation-email' />
          </div>
          <div className='login__password'>
            <label htmlFor='password'>
              Password
              <input type='password' name='' id='password' />
            </label>
            <span className='forgot-password'>Forgot password?</span>
            <span className='validation-password' />
          </div>
          <div className='login__wrong-credentials'>
            <span className='validation-wrong' />
          </div>
          <div className='login__buttons'>
            <button type='submit'>Login</button>
            <a href='\' className='login__login'>
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
