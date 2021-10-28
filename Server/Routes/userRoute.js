import express from "express";
import userController from "../Controllers/userController";
import DataChecker from "../Middlewares/dataChecker";
import verifyAccess from "../Middlewares/verifyAccess";
import Validator from "../Middlewares/validator";
import verifyToken from "../Middlewares/verifyToken";



const userRouter=express.Router();

userRouter.post("/signup", 
Validator.newAccountRules(),
Validator.validateInput,
DataChecker.validatePhoneDuplication,
userController.signupUser);


userRouter.get("/signin", userController.signinUser);


userRouter.get("/all",verifyToken, verifyAccess("hospital"), userController.getAllUsers);
userRouter.get("/:id",verifyToken, verifyAccess("hospital"), userController.getOneUser);
userRouter.patch("/:id", verifyToken, verifyAccess("admin"), userController.updateOneUser);
userRouter.delete("/:id",verifyToken, verifyAccess("admin"), userController.deleteOneUser);


export default userRouter;