function LoginForm(): JSX.Element {
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__title'>
          <div className='login__back'>
            <button
              className='login__back-btn'
              name='back'
              type='button'
              aria-label='click to go back to the homepage'
            />
          </div>
          <h2>Log in</h2>
        </div>
        <div className='login__social'>
          <p>Log in with one of the following options</p>
          <div className='login__social-btn'>
            <button
              className='login__google'
              name='google'
              type='button'
              aria-label='login with Google'
            >
              Log in with Google
            </button>
            <button
              className='login__apple'
              name='apple'
              type='button'
              aria-label='login with Apple'
            >
              Log in with Apple
            </button>
          </div>
        </div>
        <form action='' method='post'>
          <div className='login__email'>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                name=''
                id='email'
                placeholder='Enter your email'
              />
            </label>
            <span className='validation-email validation' />
          </div>
          <div className='login__password'>
            <label htmlFor='password'>
              Password
              <input
                type='password'
                name=''
                id='password'
                placeholder='Enter your password'
              />
            </label>
            <span className='validation-password validation' />
          </div>
          <div className='login__button'>
            <button className='login__submit' type='submit'>
              Log in
            </button>
          </div>
          <div className='login__signup'>
            <p>Don&apos;t have an account?</p>
            <a href='\' className='login__signup-btn'>
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
