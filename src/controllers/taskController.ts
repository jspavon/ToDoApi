import { Request, Response } from 'express';
import * as taskService from '../services/taskService';
import { TaskEnum } from '../shared/enums/generic.enums';

export const getTasks = async (_req: Request, res: Response): Promise<void> => {

    const response = await taskService.getTasks();
    try {
        res.status(response.status).json(response);
    } catch (err: any) {
        response.message = err
        res.status(response.status).json(response);
    }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    const response = await taskService.getTaskById(req.params.taskId);

    try {
        if (response.data) {
            res.status(response.status).json(response);
        } else {
            response.message = TaskEnum.TaskNotFound 
            res.status(404).json(response);
        }
    } catch (err: any) {
        response.message = err
        res.status(response.status).json(response);
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const { title, tag, completed } = req.body;
    const response = await taskService.createTask(title, tag, completed);
    try {       
        res.status(response.status).json(response);
    } catch (err: any) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const response = await taskService.updateTask(req.params.taskId, req.body);
    try {
        res.status(response.status).json(response);
    } catch (err: any) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const response = await taskService.deleteTask(req.params.taskId);
    try {
        if (response.data) {
            response.message = TaskEnum.TaskDeleted;
            res.status(response.status).json(response);
        } else {
            response.message = TaskEnum.TaskNotFound;
            res.status(response.status).json(response);
        }
    } catch (err: any) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
};

export const completeTask = async (req: Request, res: Response): Promise<void> => {
    const response = await taskService.completeTask(req.params.taskId, req.body.completed);
    try {
        if (response.data) {
            res.status(response.status).json(response);
        } else {
            response.message = TaskEnum.TaskNotFound;
            res.status(404).json(response);
        }
    } catch (err: any) {
        response.message = err.message;
        res.status(response.status).json(response);
    }
};

