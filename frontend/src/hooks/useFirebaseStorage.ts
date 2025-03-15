import { app } from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function useFirebaseStorage() {
  async function uploadFile(file: File): Promise<string | null> {
    const randomName = Math.random().toString(36).substring(7);
    try {
      const storage = getStorage(app);
      console.log(storage)
      const storageRef = ref(storage, `pictures/${randomName}-${file.name}`);
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
