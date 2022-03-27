import styles from './../styles/Hello.module.scss';
import { Typography, Grid } from '@mui/material';

const Hello = () => {
  return (
    <div className={styles.container}>
      <Grid container className={styles.grid}>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
      </Grid>
      <Typography align='center' className={styles.title} variant='h1'>
        track all your tv shows in one place
      </Typography>
      <Grid container className={styles.grid}>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
        <Grid className={styles.item} item xs>
          test
        </Grid>
      </Grid>
    </div>
  );
};

export default Hello;
