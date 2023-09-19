import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getClient = async (cleintId) => {
  const docRef = doc(db, "clients", cleintId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
