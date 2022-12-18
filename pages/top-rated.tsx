import { NextPage } from 'next';
import Nav from '../components/Nav';

const TopRated: NextPage = (): JSX.Element => {
  return (
    <div>
      <Nav />
      <section>
        <div className='top-rated__container'>
          <h1>Test</h1>
        </div>
      </section>
    </div>
  );
};

export default TopRated;
