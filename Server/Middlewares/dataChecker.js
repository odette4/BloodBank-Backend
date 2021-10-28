import UserInfo from "../Models/userModel";


class DataChecker{

    static validateEmailDuplication=async (req,res,next)=>{
        const email=await UserInfo.findOne({email:req.body.email});
        if (!email){
            return next();
        }
        return res.status(403).json({
            status: 403,
            message:"email already exist🤦‍♀️"
        });
    }

    static validatePhoneDuplication=async (req,res,next)=>{
        const phone=await UserInfo.findOne({phone:req.body.phone});
        if(!phone){
            return next();
        }
        return res.status(403).json({
            status:403,
            message:"phone number already exist🤦‍♀️"
        });
    }

   

}
export default DataChecker;