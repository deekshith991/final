
import Accounts from '../Models/Accounts.model.js';

class AccountService {
    async findAccountByEmail(email) {
        return await Accounts.findOne({ email });
    }
}

export default new AccountService();
