import Link from 'next/link';
import { useState } from 'react';

const Nav = (): JSX.Element => {
  const [isActive, setActive] = useState(false);

  const toggleClass = (): void => {
    setActive(!isActive);
  };

  return (
    <nav className='primary-nav'>
      <div className='primary-nav__container'>
        <Link href='/'>
          <figure className='primary-nav__logo'>
            <img src='/logo.png' alt='logo' height={80} />
          </figure>
        </Link>
        <div className='primary-nav__items-container'>
          <div className='primary-nav__item popular'>
            <a href='/popular' className='primary-nav__item-link'>
              Popular
            </a>
          </div>
          <div className='primary-nav__item rated'>
            <a href='/top-rated' className='primary-nav__item-link'>
              Top Rated
            </a>
          </div>
          <div className='primary-nav__item airing'>
            <a href='/airing' className='primary-nav__item-link'>
              Airing Today
            </a>
          </div>
        </div>
        <div className='primary-nav__sign-up'>
          <a href='/signup' className='primary-nav__account-link'>
            Create Account
          </a>
        </div>
        <div
          className={`primary-nav__mobile ${isActive ? 'open' : ''}`}
          onClick={toggleClass}
          onKeyDown={toggleClass}
          role='button'
          tabIndex={0}
        >
          <span className='icon' />
          <span className='icon' />
          <span className='icon' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
