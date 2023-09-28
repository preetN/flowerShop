import { db } from "../../config/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { setAdmin } from "./adminSlice";
export const getAdminAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "admin", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setAdmin({ uid, ...docSnap.data() }));
  } else {
    console.log("No such document");
  }
};
