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

const usersRef = collection(db, 'users');

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

// @route    POST "/"
// @desc.    Create a contact
// @access   Public
export const createUser = (data) => {
  const {username, email, password} = data
  return async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      firebase.fires
      // await addDoc(usersRef, data);
    } catch (error) {
      console.log(error);
    }
  }
};

// @route    POST "/"
// @desc.    Login
// @access   Public
export const userLogin = async (data) => {
  try {
    await addDoc(usersRef, data);
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
