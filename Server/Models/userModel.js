import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: [true, "name is required"]
    },

    gender: {
        type: String,
        enum: ["female", "male"]
    },

    // dob: {type: Date, require:true},

    // bloodGroup: {type:String, enum:['O','A','B','AB']},

    address: { type: String },


    phone: { type: String, require: true },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        default: 12345
    },

    role: {
        type: String,
        enum: ["user", "hospital", "admin"],
        default: "user"
    },

    status: {
        type: String,
        enum: ["active", "inactive"]
    }

});

const UserInfo = mongoose.model('User', UserSchema);

export default UserInfo;