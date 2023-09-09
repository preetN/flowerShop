import { db } from "../../../config/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { setAdmin } from "./adminSlice";
export const getAdminAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "admin", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    dispatch(setAdmin(docSnap.data()));
  } else {
    console.log("No such document");
  }
};
