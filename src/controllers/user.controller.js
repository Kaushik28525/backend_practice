import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import { User } from "../models/users.model.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponce.js';

 const registerUser = asyncHandler(async (req, res) => {
//     res.status(200).json({
//         message: "oky"
//     });

    const {fullname, email, password, username } = req.body;
    //console.log("email: ", email  ); 

    if(
        [fullname, email, password, username].some(field => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
        $or: [ { email }, { username }]
    })
    
    if(exiatedUser){
        throw new ApiError(409, "User with this email or username already exists");
    }

    const avatarLocalPath =  req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

      const avatar =  await uploadOnCloudinary(avatarLocalPath)
      const coverImage = await uploadOnCloudinary(coverImageLocalPath)

      if(!avatar){
        throw new ApiError(400," Avatar file is required")
      }

     const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
      })

     const createduser =  await User.findById(user._id).select(
        "-password -refreshToken"
     )

     if(!createduser){
        throw new ApiError(500, "something went wrong while registering the user" )
     }

     return res.status(201).json(
        new ApiResponse(200, createduser, "user registered sucessfully")
     )

}
)


export {registerUser}