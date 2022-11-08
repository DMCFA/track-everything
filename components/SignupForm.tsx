const SignupForm = (): JSX.Element => {
  return (
    <div className='signup'>
      <figure className='signup__circle' />
      <figure className='signup__circle' />
      <div className='signup__container'>
        <div className='signup__title'>
          <div className='signup__back'>
            <button
              className='signup__back-btn'
              name='back'
              type='button'
              aria-label='click to go back to the homepage'
            />
          </div>
          <h2>Sign up</h2>
        </div>
        <div className='signup__social'>
          <p>Sign up with one of the following options</p>
          <div className='signup__social-btn'>
            <button
              className='signup__google'
              name='google'
              type='button'
              aria-label='sign up with Google'
            >
              Continue with Google
            </button>
            <button
              className='signup__apple'
              name='apple'
              type='button'
              aria-label='sign up with Apple'
            >
              Continue with Apple
            </button>
          </div>
        </div>
        <form action='' method='post'>
          <div className='signup__username'>
            <label htmlFor='user'>
              Username
              <input type='text' id='user' />
            </label>
            <span className='validation-username validation' />
          </div>
          <div className='signup__email'>
            <label htmlFor='email'>
              Email
              <input type='email' name='' id='email' />
            </label>
            <span className='validation-email validation' />
          </div>
          <div className='signup__password'>
            <label htmlFor='password'>
              Password
              <input type='password' name='' id='password' />
            </label>
            <span className='validation-password validation' />
          </div>
          <div className='signup__terms'>
            <label htmlFor='terms'>
              <input type='checkbox' name='' id='terms' />
            </label>
            <span className='signup__agree'>
              I agree with the
              <a
                href='/'
                aria-label='terms and conditions'
                className='signup__terms-link'
              >
                Terms &#38; Conditions
              </a>
            </span>
          </div>
          <div className='signup__button'>
            <button className='signup__submit' type='submit'>
              Create Account
            </button>
          </div>
          <div className='signup__login'>
            <p>Already have an account?</p>
            <a href='\' className='signup__login-btn'>
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
