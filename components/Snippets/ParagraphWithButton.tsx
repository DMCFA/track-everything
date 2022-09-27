const ParagraphWithButton = (): JSX.Element => {
  return (
    <section className='paragraph-with-button'>
      <div className='paragraph-with-button__container'>
        <div className='paragraph-with-button__heading'>
          <h1>Start tracking your favorite</h1>
          <br />
          <h1 className='last'>TV shows</h1>
        </div>
        <div className='paragraph-with-button__paragraph'>
          <p>
            No subscription needed, create an account today and starting adding
            shows.
          </p>
        </div>
        <div className='paragraph-with-button__button'>
          <a href='/login' className='paragraph-with-button__login'>
            Start today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParagraphWithButton;
