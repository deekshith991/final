
import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
    accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true },
    profile: {
        companyName: { type: String, required: true },
        branch: { type: String, required: true },
        email: { type: String, required: true },
        address: {
            buildingNo: { type: String, required: true },
            street: { type: String, required: true },
            town: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pincode: { type: Number, required: true },
        },
    },
    jobsIssued: { type: Number, default: 0 },
    jobs: [
        {
            jobID: { type: mongoose.Schema.Types.ObjectId, ref: 'Jobs' },
            position: { type: String, required: true },
            salary: { type: String },
            applicants: { type: Number, default: 0 },
        },
    ],
});

module.exports = mongoose.model('Companies', companiesSchema);
