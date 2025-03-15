import { app } from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function useFirebaseStorage() {
  async function uploadFile(file: File): Promise<string | null> {
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, `pictures/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef)
      return url;
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      return null;
    }
  }

  return {
    uploadFile,
  };
}
