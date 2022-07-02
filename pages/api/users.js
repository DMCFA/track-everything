import { db, firebaseConfig } from '../../firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase-config';

const usersRef = collection(db, 'users');

// @desc.    Create a user
export const createUser = async (email, password) => {
  try {
    const req = await createUserWithEmailAndPassword(auth, email, password);
    const user = req.user;
    addUserToDB(user);
  } catch (error) {
    console.log(error.message);
  }
};

// @desc.    Add user to DB
export const addUserToDB = async (user) => {
  const { email, uid } = user;
  try {
    const docRef = await addDoc((db, 'users'), {
      email: email,
      id: uid,
      docID: docRef.id,
      shows: [],
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// @desc.    Login
export const userLogin = async (email, password) => {
  try {
    const req = signInWithEmailAndPassword(auth, email, password);
    const user = req.user;
  } catch (error) {
    console.log(error.message);
  }
};

// @route    GET "/"
// @desc.    Get all contacts
// @access   Private
export const getUsers = async () => {
  try {
    const res = await getDocs(usersRef);
    const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

// @route    GET "/:contactID"
// @desc.    Get single contact by contactID
// @access   Private
export const getOneUser = async (id) => {
  const userDoc = doc(db, 'users', id);
  try {
    const res = await getDoc(userDoc);
    const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

// @route    PATCH "/:contactID"
// @desc.    Edit a contact
// @access   Private
export const updateUser = async (id, data) => {
  const userDoc = doc(db, 'users', id);
  try {
    await updateDoc(userDoc, data);
  } catch (error) {
    console.log(error);
  }
};

// @route    DELETE "/:contactID"
// @desc.    Delete a user
// @access   Private
export const deleteUser = async (id) => {
  const userDoc = doc(db, 'users', id);
  try {
    await deleteDoc(userDoc);
  } catch (error) {
    console.log(error);
  }
};
