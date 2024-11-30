
class ResponseHandler {
    success(res, message, data = {}) {
        res.status(200).json({ success: true, message, data });
    }
}

export default new ResponseHandler();
