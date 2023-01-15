const Footer = (): JSX.Element => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__hero'>
          <div className='footer__subscribe'>
            <h3>No subscription required</h3>
            <h2>Start tracking</h2>
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
            <p>Let&#39;s chat!</p>
            <a href='/'>hi@tracktv.app</a>
            <div className='footer__social-links'>
              <a
                href='/'
                className='footer__social-link facebook'
                aria-label=' click to go to facebook page'
              />
              <a
                href='/'
                className='footer__social-link twitter'
                aria-label='click to go to twitter page'
              />
              <a
                href='/'
                className='footer__social-link linkedin'
                aria-label='click to go to linkedin page'
              />
              <a
                href='/'
                className='footer__social-link instagram'
                aria-label='click to go to instagram page'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
