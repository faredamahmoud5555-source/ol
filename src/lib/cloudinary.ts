import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

// Helper used by admin product forms to upload a product photo and
// return the hosted URL + public_id to store on the Product record.
export async function uploadProductImage(fileDataUri: string) {
  const result = await cloudinary.uploader.upload(fileDataUri, {
    folder: "aelia/products",
    transformation: [{ width: 1600, crop: "limit" }],
  });
  return { url: result.secure_url, publicId: result.public_id };
}
