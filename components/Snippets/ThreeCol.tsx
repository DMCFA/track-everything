const ThreeCol = () => {
  return (
    <section className='three-col'>
      <div className='three-col__container'>
        <div className='three-col__individual-container first'>
          <figure className='three-col__img-container'>
            <img
              className='three-col__img'
              alt=''
              src='/three-column-computer.png'
              height={150}
              width={80}
            />
          </figure>
          <div className='three-col__text'>
            <h3>Start Tracking Today</h3>
            <p>
              Create an account in seconds and start your journey through track
              tv
            </p>
          </div>
          <div className='three-col__button'>
            <a href='/login' className='three-col__cta'>
              Create an Account
            </a>
          </div>
        </div>
        <div className='three-col__individual-container second'>
          <figure className='three-col__img-container'>
            <img
              className='three-col__img'
              alt=''
              src='/three-columns-watching.png'
              height={150}
              width={80}
            />
          </figure>
          <div className='three-col__text'>
            <h3>Start Tracking Today</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              pariatur.
            </p>
          </div>
          <div className='three-col__button'>
            <a href='/login' className='three-col__cta'>
              Trending Shows
            </a>
          </div>
        </div>
        <div className='three-col__individual-container third'>
          <div className='three-col__logo' />
          <div className='three-col__text'>
            <h3>Start Tracking Today</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              pariatur.
            </p>
          </div>
          <div className='three-col__button'>
            <a href='/login' className='three-col__cta'>
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCol;
