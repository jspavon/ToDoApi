export enum ResponseMessageEnum{
    success = "Success", 
    notSuccess = "Not success",
    Forbidden = "Forbidden",
    Unauthorized = "Unauthorized",
    InvalidUsers = "Invalid username or password",
    UsedUsername = "Username already taken",
    CreatedUsername = "User created successfully",
    NotCreatedUsername = "User not created"
}

export enum TaskEnum {
    TaskNotFound = "Task not found",
    TaskDeleted = "Task deleted"
}