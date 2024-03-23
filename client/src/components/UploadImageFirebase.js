import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import app from "../../firebase.config";

export default async function UploadImageFirebase(file) {
  function makeUrlSafe(filename) {
    return filename.replace(/\s+/g, "_");
  }
  const timestamp = Date.now();
  const filename = makeUrlSafe(`${timestamp}_${file.name}`);
  try {
    const storage = getStorage(app);
    const storageRef = ref(storage, "DishDiscovery/" + filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Error uploading image:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (error) {
            console.error("Error getting download URL:", error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
