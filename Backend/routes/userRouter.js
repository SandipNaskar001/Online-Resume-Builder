import express from "express"

import { getuserProfile, loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";


const userRouter =express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);

//protected route thts why i write protect
userRouter.get("/profile",protect,getuserProfile);

export default userRouter;
