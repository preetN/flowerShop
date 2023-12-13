import { db, auth } from "../../config/FireBase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { setUser, setUsersList } from "./userSlice";
import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setAdmin } from "../admin/adminSlice";

export const createUser = async (form) => {
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      const user = userCredential.user;
      //creating admin named database and adding admin information to it
      const { password, confirmpassword, ...rest } = form;
      setDoc(doc(db, "user", user.uid), rest)
        .then(() => console.log("Done"))
        .catch(() => console.log("Error"));
      Store.addNotification({
        ...notification,
        title: "LogIn successful",
        message: "Successfully created new admin " + user.email,
        type: "success",
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      Store.addNotification({
        ...notification,
        title: "Fail",
        message: errorMessage,
        type: "danger",
      });
    });
};
export const loginUser = (form) => async (dispatch) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(getUserAction(user.uid));
    })
    .catch((error) => {
      const errorMessage = error.message;
      Store.addNotification({
        ...notification,
        title: "Fail",
        message: errorMessage,
        type: "danger",
      });
    });
};
export const getUserAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists() && docSnap.data().type === "user") {
    dispatch(setUser({ uid, ...docSnap.data() }));
    Store.addNotification({
      ...notification,
      title: "Success",
      message: "Login Successful",
      type: "success",
    });
  } else if (docSnap.exists() && docSnap.data().type === "admin") {
    dispatch(setAdmin({ uid, ...docSnap.data() }));
    Store.addNotification({
      ...notification,
      title: "Success",
      message: "Login Successful",
      type: "success",
    });
  }
};
export const getAllUserAction = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const user = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    if (data.type === "user") {
      user.push({ ...data, id });
    }
  });
  dispatch(setUsersList(user));
};
export const updateUserAction = (uid, form) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  await setDoc(docRef, { ...form }, { merge: true });
  dispatch(setUser({ uid, ...form }));

  Store.addNotification({
    ...notification,
    title: "Success",
    message: "Information updated successfully",
    type: "success",
  });
};
