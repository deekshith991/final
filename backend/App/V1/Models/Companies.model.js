
import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
    accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true },
    profile: {
        companyName: { type: String },
        branch: { type: String },
        email: { type: String, required: true },
        address: {
            buildingNo: { type: String },
            street: { type: String },
            town: { type: String },
            state: { type: String },
            country: { type: String },
            pincode: { type: Number },
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

export default mongoose.model('Companies', companiesSchema);
