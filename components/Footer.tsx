const Footer = (): JSX.Element => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__hero'>
          <div className='footer__subscribe'>
            <h3>No subscription required</h3>
            <h2>Start tracking shows today</h2>
            <div className='footer__email-container'>
              <label htmlFor='email'>
                Email
                <input
                  type='email'
                  name='subscribe'
                  id='email'
                  placeholder='Enter your email'
                />
              </label>
              <figure className='footer__hero-image'>
                <img src='/footer-hero.png' alt='' />
              </figure>
            </div>
          </div>
        </div>
        <div className='footer__content'>
          <div className='footer__company'>
            <h2>Track Everything</h2>
            <p>Track all your TV shows in one place</p>
          </div>
          <div className='footer__links'>
            <div className='footer__links-content'>
              <a href='/'>About</a>
              <a href='/'>Popular</a>
              <a href='/'>Top Rated</a>
              <a href='/'>Airing Today</a>
            </div>
            <div className='footer__links-legal'>
              <a href='/'>Terms and Conditions</a>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Cookie Policy</a>
            </div>
          </div>
          <div className='footer__social'>
            <p>Let&#39s chat!</p>
            <a href='/'>hi@tracktv.app</a>
            <div className='footer__social-links'>
              <a href='/' className='footer__social-link facebook'>
                Facebook
              </a>
              <a href='/' className='footer__social-link twitter'>
                Twitter
              </a>
              <a href='/' className='footer__social-link linkedin'>
                Linkedin
              </a>
              <a href='/' className='footer__social-link instagram'>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
