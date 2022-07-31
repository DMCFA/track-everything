// interface SignUpProps {
//   username: string;
//   email: string;
//   password: string;
// }

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
            <label htmlFor=''>Username</label>
            <input type='text' />
            <span className='validation-username'></span>
          </div>
          <div className='signup__email'>
            <label htmlFor=''>Email</label>
            <input type='email' name='' id='' />
            <span className='validation-email'></span>
          </div>
          <div className='signup__password'>
            <label htmlFor=''>Password</label>
            <input type='password' name='' id='' />
            <span className='validation-password'></span>
          </div>
          <div className='signup__buttons'>
            <button className='signup__submit' type='submit'>
              Register
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
