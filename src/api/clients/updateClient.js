import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const updateClient = async (cleintId, payload) => {
  const clientRef = doc(db, "clients", cleintId);
  try {
    await setDoc(
      clientRef,
      { user_profile: payload, date_updated: serverTimestamp() },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};
