"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getUser = exports.loginUser = void 0;
const authService_1 = require("../services/authService");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = (yield (0, authService_1.authenticateUser)(username, password));
        const response = (0, authService_1.generateAccessToken)({ username: user.data, role: 'user' });
        res.status(response.status).json(response);
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(401).send(errorMessage);
    }
});
exports.loginUser = loginUser;
const getUser = (req, res) => {
    res.json(req.user);
};
exports.getUser = getUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const response = yield (0, authService_1.createUser)(username, password);
        res.status(response.status).json(response);
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(400).send(errorMessage);
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=authControlller.js.map