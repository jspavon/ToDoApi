import { Request, Response } from 'express';
import { generateAccessToken, authenticateUser, createUser } from '../services/authService';

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = (await authenticateUser(username, password));
        const response = generateAccessToken({ username: user.data, role: 'user' });
        res.status(response.status).json(response);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(401).send(errorMessage);
    }
};

export const getUser = (req: Request, res: Response) => {
    res.json((req as any).user);
};

export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const response = await createUser(username, password);
        res.status(response.status).json(response);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send(errorMessage);
    }
};


