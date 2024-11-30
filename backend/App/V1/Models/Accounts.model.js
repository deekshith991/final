
import mongoose from 'mongoose';

const accountsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: 'active' },
});

module.exports = mongoose.model('Accounts', accountsSchema);
