"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.completeTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getTasks = void 0;
const taskService = __importStar(require("../services/taskService"));
const generic_enums_1 = require("../shared/enums/generic.enums");
const getTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield taskService.getTasks();
    try {
        res.status(response.status).json(response);
    }
    catch (err) {
        response.message = err;
        res.status(response.status).json(response);
    }
});
exports.getTasks = getTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield taskService.getTaskById(req.params.taskId);
    try {
        if (response.data) {
            res.status(response.status).json(response);
        }
        else {
            response.message = generic_enums_1.TaskEnum.TaskNotFound;
            res.status(404).json(response);
        }
    }
    catch (err) {
        response.message = err;
        res.status(response.status).json(response);
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, tag, completed } = req.body;
    const response = yield taskService.createTask(title, tag, completed);
    try {
        res.status(response.status).json(response);
    }
    catch (err) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield taskService.updateTask(req.params.taskId, req.body);
    try {
        res.status(response.status).json(response);
    }
    catch (err) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield taskService.deleteTask(req.params.taskId);
    try {
        if (response.data) {
            response.message = generic_enums_1.TaskEnum.TaskDeleted;
            res.status(response.status).json(response);
        }
        else {
            response.message = generic_enums_1.TaskEnum.TaskNotFound;
            res.status(response.status).json(response);
        }
    }
    catch (err) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
});
exports.deleteTask = deleteTask;
const completeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield taskService.completeTask(req.params.taskId, req.body.completed);
    try {
        if (response.data) {
            res.status(response.status).json(response);
        }
        else {
            response.message = generic_enums_1.TaskEnum.TaskNotFound;
            res.status(404).json(response);
        }
    }
    catch (err) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
});
exports.completeTask = completeTask;
//# sourceMappingURL=taskController.js.map