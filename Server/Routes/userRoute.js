import express from "express";
import userController from "../Controllers/userController.js";
import DataChecker from "../Middlewares/dataChecker.js";
import verifyAccess from "../Middlewares/verifyAccess.js";
import Validator from "../Middlewares/validator.js";
import verifyToken from "../Middlewares/verifyToken.js";



const userRouter=express.Router();

userRouter.post("/signup", 
Validator.newAccountRules(),
Validator.validateInput,
DataChecker.validatePhoneDuplication,
userController.signupUser);


userRouter.post("/signin", userController.signinUser);


userRouter.get("/all",verifyToken, verifyAccess("hospital"), userController.getAllUsers);
userRouter.get("/:id",verifyToken, verifyAccess("hospital"), userController.getOneUser);
userRouter.patch("/:id", verifyToken, verifyAccess("admin"), userController.updateOneUser);
userRouter.delete("/:id",verifyToken, verifyAccess("admin"), userController.deleteOneUser);


export default userRouter;