import {check,validationResult} from "express-validator";

class Validator{

    static validateInput=(req,res,next)=>{
        const errors=validationResult(req);
        if (!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message: errorMessage
            }) 
        }
    return next ();

    }


    static newAccountRules(){
        return [
          
            
            check ("email","Please your email is invalid").isEmail(),
            check ("phone","Please your phone number is invalid").isMobilePhone(),
            check ("password","Please your password must be strong").isStrongPassword()
        ];
    }
   


}
export default Validator;