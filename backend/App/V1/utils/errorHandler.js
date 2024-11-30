
class ErrorHandler {
    handle(res, error) {
        res.status(400).json({ success: false, message: error.message || 'An error occurred' });
    }
}

export default new ErrorHandler();
