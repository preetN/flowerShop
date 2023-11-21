import { db } from "../../config/FireBase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
import { setQueryList } from "./querySlice";
export const addQueryAction = (form) => {
  addDoc(collection(db, "query"), form)
    .then(() => {
      Store.addNotification({
        ...notification,
        title: "Query Submitted",
        message: "Someone will be in contact soon",
        type: "success",
        dismiss: {
          duration: 2000,
        },
      });
    })
    .catch(() => console.log("Error"));
};
export const getAllQueryAction = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "query"));
  const queries = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    queries.push({ ...data, id });
  });
  dispatch(setQueryList(queries));
};
export const deleteQuery = (id) => async (dispatch) => {
  await deleteDoc(doc(db, "query", id));
  dispatch(getAllQueryAction());
};
export const updateQueryAction = (id, rest, note) => async (dispatch) => {
  const docRef = doc(db, "query", id);
  //add note and if it already exists then add to array
  await setDoc(docRef, rest, { merge: true });
  dispatch(getAllQueryAction());
  Store.addNotification({
    ...notification,
    title: "Noted",
    message: "Noted sucessfully",
    type: "warning",
  });
};
