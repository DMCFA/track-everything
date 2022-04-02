import styles from './../styles/Hello.module.scss';
import { Typography } from '@mui/material';

const Hello = ({ shows }) => {
  const showImages = shows.slice(0, 8).map((item) => {
    return (
      <div className={styles.card} key={item.id}>
        <h4 className={styles.name}>{item.name}</h4>
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt='poster image'
          height='280px'
          width='250px'
        />
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <Typography align='center' className={styles.title} variant='h1'>
        track all your tv shows in one place
      </Typography>
      <div className={styles.grid}>{showImages}</div>
    </div>
  );
};

export default Hello;
