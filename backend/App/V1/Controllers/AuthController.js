
import authService from '../services/AuthService.js';
import responseHandler from '../utils/responseHandler.js';
import errorHandler from '../utils/errorHandler.js';

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const response = await authService.login(email, password);
            responseHandler.success(res, 'Login successful', response);
        } catch (error) {
            errorHandler.handle(res, error);
        }
    }

    async register(req, res) {
        try {
            const { email, password, accountType } = req.body;
            const result = await authService.register(email, password, accountType);
            responseHandler.success(res, 'Registration successful', result);
        } catch (error) {
            errorHandler.handle(res, error);
        }
    }
}

export default new AuthController();
