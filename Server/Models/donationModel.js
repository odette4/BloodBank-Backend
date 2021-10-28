import mongoose from "mongoose";


const DonationSchema= new mongoose.Schema({
title:{type:String,
       require:true},
description: String,
location: {type:String,require:true},
organiser:{type:String,
            ref:"Hospital",require:true},
timeToStart:Date,

timeToEnd:Date


})
const DonationInfo=mongoose.model('Donation',DonationSchema);
export default DonationInfo;