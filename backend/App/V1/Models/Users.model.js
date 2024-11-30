
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true },
    profile: {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, require: true },
        phoneNo: { type: String },
        address: {
            houseNo: { type: String },
            street: { type: String },
            village: { type: String },
            town: { type: String },
            state: { type: String },
            country: { type: String },
            pincode: { type: Number },
        },
        Applied: { type: Number, default: 0 },
    },
    education: [
        {
            instituteName: { type: String },
            percentage: { type: Number },
            fromYear: { type: Number },
            toYear: { type: Number },
            fromEdu: { type: String },
            toEdu: { type: String },
            major: { type: String },
        },
    ],
    applications: [
        {
            jobID: { type: mongoose.Schema.Types.ObjectId, ref: 'Jobs' },
            companyName: { type: String, required: true },
            position: { type: String, required: true },
        },
    ],
});

export default mongoose.model('Users', usersSchema);
