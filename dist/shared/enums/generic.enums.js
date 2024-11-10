"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEnum = exports.ResponseMessageEnum = void 0;
var ResponseMessageEnum;
(function (ResponseMessageEnum) {
    ResponseMessageEnum["success"] = "Success";
    ResponseMessageEnum["notSuccess"] = "Not success";
    ResponseMessageEnum["Forbidden"] = "Forbidden";
    ResponseMessageEnum["Unauthorized"] = "Unauthorized";
    ResponseMessageEnum["InvalidUsers"] = "Invalid username or password";
    ResponseMessageEnum["UsedUsername"] = "Username already taken";
    ResponseMessageEnum["CreatedUsername"] = "User created successfully";
    ResponseMessageEnum["NotCreatedUsername"] = "User not created";
})(ResponseMessageEnum || (exports.ResponseMessageEnum = ResponseMessageEnum = {}));
var TaskEnum;
(function (TaskEnum) {
    TaskEnum["TaskNotFound"] = "Task not found";
    TaskEnum["TaskDeleted"] = "Task deleted";
})(TaskEnum || (exports.TaskEnum = TaskEnum = {}));
//# sourceMappingURL=generic.enums.js.map