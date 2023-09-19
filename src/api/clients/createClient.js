import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const createClient = async (cleintId, payload) => {
  const clientRef = doc(db, "clients", cleintId);
  try {
    await setDoc(clientRef, {
      id: cleintId,
      email: payload.email,
      date_created: serverTimestamp(),
      date_updated: serverTimestamp(),
      user_profile: null,
      photo_url: null,
    });
  } catch (error) {
    console.log(error);
  }
};
