const ParagraphWithButton = (): JSX.Element => {
  return (
    <section className='paragraph-with-button'>
      <div className='paragraph-with-button__container'>
        <div className='paragraph-with-button__heading'>
          <h1>
            Start tracking
            <br />
            Your favorite
            <br />
            TV Shows
          </h1>
        </div>
        <div className='paragraph-with-button__paragraph'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nobis quo molestias praesentium deserunt sunt?
          </p>
        </div>
        <div className='paragraph-with-button__button'>
          <a href='/login' className='paragraph-with-button__login'>
            Start tracking
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParagraphWithButton;
