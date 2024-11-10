import Task from '../models/taskModel';
import { IResponseService } from '../shared/interface/IResponseService'
import { ResponseMessageEnum } from '../shared/enums/generic.enums'

export const getTasks = async (): Promise<IResponseService<Task[]>>  => {
    let status = 200;
    
    var tasks = await Task.findAll();

    const IResponse : IResponseService<Task[]> = {
        status: tasks.length > 0 ? 200 : 500,
        message: tasks.length > 0 ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: tasks
    };

    return IResponse;
};

export const getTaskById = async (taskId: string) : Promise<IResponseService<Task>> => {
    var task = await Task.findByPk(taskId);

    const IResponse : IResponseService<Task> = {
        status: task != null ? 200 : 500,
        message: task != null ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: task
    };

    return IResponse;
};

export const createTask = async (title: string, tag: string, completed: boolean) : Promise<IResponseService<String>> => {

    var task =  Task.create({ title, tag, completed });
    const IResponse : IResponseService<string> = {
        status: task != null ? 200 : 500,
        message: task != null ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: "Created task"
    };

    return IResponse;
};

export const updateTask = async (taskId: string, updateData: Partial<{ title: string, tag: string, completed: boolean }>) : Promise<IResponseService<String>> => {
    const [updated] = await Task.update(updateData, { where: { id: taskId } });

    const IResponse : IResponseService<string> = {
        status: updated ? 200 : 500,
        message: updated ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: updated ? "Updated" : "Not updated"
    };

    return IResponse;
};

export const deleteTask = async (taskId: string) : Promise<IResponseService<boolean>> => {
    const deleted = await Task.destroy({ where: { id: taskId } });

    const IResponse : IResponseService<boolean> = {
        status: deleted ? 200 : 500,
        message: deleted ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: deleted ? true : false
    };

    return IResponse;
};

export const completeTask = async (taskId: string, completed: boolean) : Promise<IResponseService<Task>> => {
    const [updated] = await Task.update({ completed }, { where: { id: taskId } });
    var task: Task | null = updated ? await Task.findByPk(taskId) : null;

    const IResponse : IResponseService<Task> = {
        status: updated ? 200 : 500,
        message: updated ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: task
    };

    return IResponse;
};
