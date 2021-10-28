import TokenAuth from "../Helpers/tokenAuth.js";


const verifyToken=async (req,res,next)=>{
    const token= req.header("v-auth-token");
    if (!token){
        return res.status(404).json({
            status:404,
            message: "no token provided"
        })
    }

    try{
        const user=TokenAuth.getDataFromToken(token);

        req.user=user;
        return next();
    }
    catch (err){
        console.log(">>>>>>>>>>>",err);
    }
}
export default verifyToken;