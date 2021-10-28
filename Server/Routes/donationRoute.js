import express from "express";
import donationController from "../Controllers/donationController.js";
import verifyAccess from "../Middlewares/verifyAccess.js";
import verifyToken from "../Middlewares/verifyToken.js";


const donationRouter=express.Router();

donationRouter.post("/create",verifyToken,verifyAccess("hospital"),donationController.createDonation);
donationRouter.get("/all",donationController.getAllDonations);
donationRouter.get("/:id",donationController.getOneDonation);
donationRouter.patch("/:id",verifyToken,verifyAccess("hospital"),donationController.updateOneDonation);
donationRouter.delete("/:id",verifyToken,verifyAccess("admin"),donationController.deleteOneDonation);


export default donationRouter;