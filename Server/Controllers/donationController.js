import DonationInfo from "../Models/DonationModel.js";

class donationController{

    static createDonation=async(req,res)=>{
        const donation=await DonationInfo.create(req.body);
    if(!donation){
        return res.status(400).json({
            status:400,
            message:"failed to create donation event"
        });
    }
        return res.status(200).json({
            status:200,
            message:"created donation events sucessfully👍",
            data:donation
        });
    }


    static getAllDonations=async(req,res)=>{
        const donations=await DonationInfo.find();
    if(!donations){
        return res.status(404).json({
            status:200,
            message:"failed to get all donation events"
        });
    }
        return res.status(200).json({
            status:200,
            message:"the list of donation events",
            data:donations
        });
    }


    static getOneDonation=async(req,res)=>{
        const donation=await DonationInfo.findById(req.params.id);
    if(!donation){
        return res.status(404).json({
            status:404,
            message:"failed to get the donation event"
        });
    }
        return res.status(200).json({
            status:200,
            message:"successfully got one donation event",
            data: donation
        });

    }



    static updateOneDonation=async(req,res)=>{
        const donation=await DonationInfo.findByIdAndUpdate(req.params.id,req.body);
    if(!donation){
        return res.status(404).json({
            status:404,
            message:"failed to update the donation event"
        });
    }
        const updatedDonation=await DonationInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully updated the donation event",
            data:updatedDonation
        });
    }



    static deleteOneDonation=async(req,res)=>{
        const donation=await DonationInfo.findByIdAndDelete(req.params.id);
    if(!donation){
        return res.status(404).json({
            status:404,
            message:"failed to delete the donation event"
        });
    }
        return res.status(200).json({
            status:200,
            message:"successfully deleted the donation event",
            data:donation
        });
    }

    
}
export default donationController;
