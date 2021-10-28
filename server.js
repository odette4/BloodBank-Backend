import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Server/Routes/userRoute";
import bodyParser from "body-parser";
import donationRouter from "./Server/Routes/donationRoute";
import cors from "cors";



dotenv.config({path:'./.env'});

const app=express();

//express

app.use(cors());
app.use(bodyParser.json());
app.use("/bloodbank/v1/user",userRouter);
app.use("/bloodbank/v1/donation", donationRouter);
app.use('/',(req,res)=>{
    res.status(404).send({
    status:404,
    message:"This Route does not exist"
})
})



const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>console.log("Database connected sucessfully"));

const port= process.env.PORT;
app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})

export default app;