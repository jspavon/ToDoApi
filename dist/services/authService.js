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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.generateAccessToken = exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authModel_1 = __importDefault(require("../models/authModel"));
const envs_1 = require("../config/envs");
const generic_enums_1 = require("../shared/enums/generic.enums");
const secretKey = envs_1.envs.JWT_SECRET;
const authenticateUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield authModel_1.default.findOne({ where: { username } });
    if (!user) {
        throw new Error(generic_enums_1.ResponseMessageEnum.InvalidUsers);
    }
    /*const isValidPassword = await Auth.comparePassword(password, user.password);

    if (!isValidPassword) {
        throw new Error(ResponseMessageEnum.InvalidUsers);
    }*/
    const IResponse = {
        status: user != null ? 200 : 500,
        message: user != null ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.InvalidUsers,
        data: user.username
    };
    return IResponse;
});
exports.authenticateUser = authenticateUser;
const generateAccessToken = (user) => {
    var response = jsonwebtoken_1.default.sign(user, secretKey, { expiresIn: '1h' });
    const IResponse = {
        status: response != null ? 200 : 500,
        message: response != null ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: response
    };
    return IResponse;
};
exports.generateAccessToken = generateAccessToken;
const createUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield authModel_1.default.findOne({ where: { username } });
    if (existingUser) {
        throw new Error(generic_enums_1.ResponseMessageEnum.UsedUsername);
    }
    const newUser = yield authModel_1.default.create({ username, password });
    const IResponse = {
        status: existingUser != null ? 200 : 500,
        message: existingUser != null ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: newUser.id != null ? generic_enums_1.ResponseMessageEnum.CreatedUsername : generic_enums_1.ResponseMessageEnum.NotCreatedUsername
    };
    return IResponse;
});
exports.createUser = createUser;
//# sourceMappingURL=authService.js.map