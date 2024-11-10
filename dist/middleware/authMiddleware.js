"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const envs_1 = require("../config/envs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generic_enums_1 = require("../shared/enums/generic.enums");
const secretKey = envs_1.envs.JWT_SECRET;
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secretKey, (err, user) => {
            if (err) {
                const IResponse = {
                    status: 403,
                    message: generic_enums_1.ResponseMessageEnum.Forbidden,
                    data: null
                };
                return res.status(IResponse.status).send(IResponse);
            }
            req.user = user;
            next();
        });
    }
    else {
        const IResponse = {
            status: 401,
            message: generic_enums_1.ResponseMessageEnum.Unauthorized,
            data: null
        };
        res.status(IResponse.status).send(IResponse);
    }
};
exports.authenticateJWT = authenticateJWT;
//# sourceMappingURL=authMiddleware.js.map