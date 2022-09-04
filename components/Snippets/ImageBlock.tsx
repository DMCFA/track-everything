interface Props {
  shows: any;
}

const ImageBlock = ({ shows }: Props): JSX.Element => {
  const showImages = shows.slice(0, 6).map((item: any) => {
    return (
      <div className='image-block__card' key={item.id}>
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt=''
          height='280px'
          width='250px'
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
