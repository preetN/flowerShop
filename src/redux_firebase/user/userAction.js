import { db } from "../../config/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { setUser } from "./userSlice";
export const getUserAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setUser({ uid, ...docSnap.data() }));
  } else {
    console.log("No such document");
  }
};
