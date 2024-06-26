import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    phone: { type: String, required: false, unique: true},
    phone_verification: { type: Boolean, default: false},
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true, min: 6, max: 18},
    user_type: { type: String, default: 'Client', enum: ['Client', 'Driver', 'Admin', 'Vendor']},
    verification: { type: Boolean, default: false},
    verification_code: { type: String, default: true},
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: false},
    otp: { type: String, required: true, default: 'none'},
    profile_pic: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'},
}, { timestamps: true})

export default mongoose.model("User", UserSchema);