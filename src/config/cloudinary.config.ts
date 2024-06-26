import { UploadApiResponse, v2 as _cloudinary } from "cloudinary";
import { extractPublicIdFromUrl } from "../utils/functions.js";

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const cloudinary = _cloudinary;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export async function uploadImage(file: any): Promise<UploadApiResponse> {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "image",
      folder: "cargologix/images",
    });

    return response;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
}

export async function deleteImage(url: string): Promise<any> {
  try {
    const publicId = extractPublicIdFromUrl(url);
    if (!publicId) throw new Error(`Invalid url format`);
    const response = await cloudinary.uploader.destroy(publicId);
    return response;
  } catch (err) {
    throw new Error(`From Cloudinary: ${err}`);
  }
}

export default {
  uploadImage,
  deleteImage,
};
