'use strict';
class APIResponse {
    constructor() {}

    static success(res, message, data) {
        res.status(200).json({
            code: 200,
            message: message || 'Success',
            data: data,
        });
    }

    static serverError(res, message, data) {
        res.status(500).json({
            code: 500,
            message: message || 'Internal server error',
            data: data,
        });
    }
}

module.exports = APIResponse;
