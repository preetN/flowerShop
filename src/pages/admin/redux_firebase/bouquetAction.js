import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/FireBase";

export const getAllBouquetAction = async () => {
  const querySnapshot = await getDocs(collection(db, "bouquet"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
