
import mongoose from 'mongoose';

const accountsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: 'pending', enum: ['pending', 'active', 'deleted', 'banned'] },
    accountType: { type: String, enum: ['user', 'company'], required: true },
});

export default mongoose.model('Accounts', accountsSchema);
