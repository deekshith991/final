
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true },
    profile: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phoneNo: { type: String, required: true },
        address: {
            houseNo: { type: String, required: true },
            street: { type: String, required: true },
            village: { type: String },
            town: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pincode: { type: Number, required: true },
        },
        Applied: { type: Number, default: 0 },
    },
    education: [
        {
            instituteName: { type: String, required: true },
            percentage: { type: Number, required: true },
            fromYear: { type: Number, required: true },
            toYear: { type: Number, required: true },
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

module.exports = mongoose.model('Users', usersSchema);
