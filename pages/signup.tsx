import type { NextPage } from 'next';
import SignupForm from '../components/SignupForm';
import Spacer from '../components/Spacer';

const Signup: NextPage = () => (
  <>
    <Spacer height="10rem" />
    <SignupForm />
  </>
);

export default Signup;
