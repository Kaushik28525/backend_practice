import {v2 as kauhsik } from "cloudinary";
import fs from "fs";


cloudinary.config({
  cloud_name: Process.env.CLOUDINARY_CLOUD_NAME,
  api_key: Process.env.CLOUDINARY_API_KEY,
  api_secret: Process.env.CLOUDINARY_API_SECRET
});

const uplodeOnCloudinary = async (localFilePath) => {
    try {
           if(!localFilePath) return null;
           const response = await cloudinary.uploader.upload(localFilePath, {
           resource_type= "auto"
})
    console.log("file uploaded to cloudinary ", response.secure_url);
    return response.secure_url;
} catch (error) {
       fs.unlinkSync(localFilePath);
       return null;
}
}
