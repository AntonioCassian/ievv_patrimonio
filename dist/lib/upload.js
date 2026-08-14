import { supabase } from "./supabase.js";
import sharp from "sharp";
export const uploadImage = async (file, bucketName, folder = "") => {
    if (!file || !file.buffer) {
        throw new Error("Arquivo não recebido ou buffer vazio.");
    }
    const processedImage = await sharp(file.buffer)
        .resize(1200, 1200, {
        fit: "inside",
        withoutEnlargement: true,
    })
        .webp({
        quality: 80,
    })
        .toBuffer();
    const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}.webp`;
    const filePath = folder
        ? `${folder}/${fileName}`
        : fileName;
    const { error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, processedImage, {
        contentType: "image/webp",
        upsert: false,
    });
    if (error) {
        console.error("SUPABASE UPLOAD ERROR:", error);
        throw error;
    }
    const { data } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);
    return data.publicUrl;
};
//# sourceMappingURL=upload.js.map