import styles from './../styles/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.loading}
        src='/loading.svg'
        alt='Loading GIF'
        width={300}
        height={300}
      />
    </div>
  );
};

export default Loading;
