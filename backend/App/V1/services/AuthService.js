
import accountService from './accountService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Accounts from '../Models/Accounts.model.js';
import Users from '../Models/Users.model.js';
import Companies from '../Models/Companies.model.js';

const JWT_SECRET = process.env.JWT_SECRET || "allaneropalloallanerudupallo";

class AuthService {
    async login(email, password) {
        const account = await accountService.findAccountByEmail(email);
        if (!account) throw new Error('Account not found');

        const isMatch = await bcrypt.compare(password, account.password);
        if (!isMatch) throw new Error('Invalid credentials');

        if (account.status === 'pending') {
            throw new Error('Account status is pending. Please contact support.');
        }

        const token = jwt.sign({ id: account._id, accountType: account.accountType }, JWT_SECRET, {
            expiresIn: '1d',
        });

        const userData = {
            ID: account._id,
            email: email,
            accountType: account.accountType
        }
        const responseData = { token, userData };

        return responseData;
    }

    async register(email, password, accountType) {
        if (!['user', 'company'].includes(accountType)) {
            throw new Error('Invalid account type');
        }

        const existingAccount = await accountService.findAccountByEmail(email);
        if (existingAccount) {
            throw new Error('Email is already registered');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const account = await Accounts.create({
            email,
            password: hashedPassword,
            status: 'pending',
            accountType,
        });


        let profile;
        if (accountType === 'user') {
            profile = await Users.create({
                accountID: account._id,
                profile: { email: email }
            });
        } else if (accountType === 'company') {
            profile = await Companies.create({
                accountID: account._id,
                profile: { email: email }
            });
        }


        const token = jwt.sign({ id: account._id, accountType: account.accountType }, JWT_SECRET, {
            expiresIn: '1d',
        });

        const userData = {
            ID: account._id,
            email: email,
            accountType: account.accountType
        }
        const responseData = { token, userData };

        return responseData;
    }
}

export default new AuthService();
