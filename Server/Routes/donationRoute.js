import express from "express";
import donationController from "../Controllers/donationController";
import verifyAccess from "../Middlewares/verifyAccess";
import verifyToken from "../Middlewares/verifyToken";


const donationRouter=express.Router();

donationRouter.post("/create",verifyToken,verifyAccess("hospital"),donationController.createDonation);
donationRouter.get("/all",donationController.getAllDonations);
donationRouter.get("/:id",donationController.getOneDonation);
donationRouter.patch("/:id",verifyToken,verifyAccess("hospital"),donationController.updateOneDonation);
donationRouter.delete("/:id",verifyToken,verifyAccess("admin"),donationController.deleteOneDonation);


export default donationRouter;