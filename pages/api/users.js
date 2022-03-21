import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const usersRef = collection(db, 'users');

export const getUsers = async () => {
  try {
    const res = await getDocs(usersRef);
    const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};
