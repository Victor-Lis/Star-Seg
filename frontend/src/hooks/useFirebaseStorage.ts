import { app } from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function useFirebaseStorage() {
  async function uploadFile(file: File): Promise<string | null> {
    const randomName = Math.random().toString(36).substring(7);
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, `pictures/${randomName}-${file.name}`);
      const response = await uploadBytes(storageRef, file);
      console.log(response)
      const url = await getDownloadURL(storageRef)
      console.log(url)
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
