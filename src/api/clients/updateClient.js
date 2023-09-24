import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { notify } from "../../components/alert";

export const updateClient = async (cleintId, payload) => {
  const clientRef = doc(db, "clients", cleintId);
  try {
    await setDoc(
      clientRef,
      { user_profile: payload, date_updated: serverTimestamp() },
      { merge: true }
    );
    notify("success", "Profile updated");
  } catch (error) {
    console.log(error);
  }
};
