interface Props {
  shows: any;
}

const ImageBlock = ({ shows }: Props): JSX.Element => {
  const showImages = shows.slice(0, 6).map((item: any) => {
    return (
      <div className='image-block__card' key={item.id}>
        <img
          className='image-block__img'
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt=''
          height='230px'
          width='200px'
        />
      </div>
    );
  });
  return (
    <section className='image-block'>
      <div className='image-block__container'>{showImages}</div>
    </section>
  );
};

export default ImageBlock;
