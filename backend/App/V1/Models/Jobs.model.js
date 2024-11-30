
import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    companyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Companies', required: true },
    position: { type: String, required: true },
    branch: { type: String, required: true },
    salary: { type: String },
    jobDescription: { type: String, required: true },
    vacancies: { type: Number, required: true },
    noApplicants: { type: Number, default: 0 },
    applications: [
        {
            applicantID: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
            name: { type: String, required: true },
            email: { type: String, required: true },
        },
    ],
});

export default mongoose.model('Jobs', jobsSchema);
