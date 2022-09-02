import { validateUsername } from '../ts/Validation';

const SignupForm = (): JSX.Element => {
  return (
    <div className='signup'>
      <div className='signup__container'>
        <div className='signup__title'>
          <span>Join </span>
          <span>Track Everything</span>
        </div>
        <form action='' method='post'>
          <div className='signup__username'>
            <label htmlFor='user'>
              Username
              <input
                type='text'
                id='user'
                onChange={(e) => validateUsername(e.target.value)}
              />
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
          <div className='signup__buttons'>
            <button className='signup__submit' type='submit'>
              register
            </button>
            <a href='\' className='signup__login'>
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
