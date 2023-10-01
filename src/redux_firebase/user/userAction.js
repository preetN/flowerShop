import { db } from "../../config/FireBase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { setUser, setUsersList } from "./userSlice";
export const getUserAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setUser({ uid, ...docSnap.data() }));
  } else {
    console.log("No such document");
  }
};
export const getAllUserAction = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const user = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    user.push({ ...data, id });
  });
  dispatch(setUsersList(user));
};
