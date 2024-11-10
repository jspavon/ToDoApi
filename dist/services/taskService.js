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
exports.completeTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getTasks = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
const generic_enums_1 = require("../shared/enums/generic.enums");
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    let status = 200;
    var tasks = yield taskModel_1.default.findAll();
    const IResponse = {
        status: tasks.length > 0 ? 200 : 500,
        message: tasks.length > 0 ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: tasks
    };
    return IResponse;
});
exports.getTasks = getTasks;
const getTaskById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    var task = yield taskModel_1.default.findByPk(taskId);
    const IResponse = {
        status: task != null ? 200 : 500,
        message: task != null ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: task
    };
    return IResponse;
});
exports.getTaskById = getTaskById;
const createTask = (title, tag, completed) => __awaiter(void 0, void 0, void 0, function* () {
    var task = taskModel_1.default.create({ title, tag, completed });
    const IResponse = {
        status: task != null ? 200 : 500,
        message: task != null ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: "Created task"
    };
    return IResponse;
});
exports.createTask = createTask;
const updateTask = (taskId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const [updated] = yield taskModel_1.default.update(updateData, { where: { id: taskId } });
    const IResponse = {
        status: updated ? 200 : 500,
        message: updated ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: updated ? "Updated" : "Not updated"
    };
    return IResponse;
});
exports.updateTask = updateTask;
const deleteTask = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield taskModel_1.default.destroy({ where: { id: taskId } });
    const IResponse = {
        status: deleted ? 200 : 500,
        message: deleted ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: deleted ? true : false
    };
    return IResponse;
});
exports.deleteTask = deleteTask;
const completeTask = (taskId, completed) => __awaiter(void 0, void 0, void 0, function* () {
    const [updated] = yield taskModel_1.default.update({ completed }, { where: { id: taskId } });
    var task = updated ? yield taskModel_1.default.findByPk(taskId) : null;
    const IResponse = {
        status: updated ? 200 : 500,
        message: updated ? generic_enums_1.ResponseMessageEnum.success : generic_enums_1.ResponseMessageEnum.notSuccess,
        data: task
    };
    return IResponse;
});
exports.completeTask = completeTask;
//# sourceMappingURL=taskService.js.map