import jwt from 'jsonwebtoken';
import Auth from '../models/authModel';
import { envs } from '../config/envs';
import { IResponseService } from '../shared/interface/IResponseService'
import { ResponseMessageEnum } from '../shared/enums/generic.enums'

const secretKey = envs.JWT_SECRET;

export const authenticateUser = async (username: string, password: string) : Promise<IResponseService<String>> => {
    const user = await Auth.findOne({ where: { username } });
    
    if (!user) {
        throw new Error(ResponseMessageEnum.InvalidUsers);
    }

    /*const isValidPassword = await Auth.comparePassword(password, user.password);

    if (!isValidPassword) {
        throw new Error(ResponseMessageEnum.InvalidUsers);
    }*/

    const IResponse : IResponseService<string> = {
        status: user != null ? 200 : 500,
        message: user != null ? ResponseMessageEnum.success : ResponseMessageEnum.InvalidUsers,
        data: user.username
    };

    return IResponse;
};

export const generateAccessToken = (user: any) : IResponseService<string> => {
    var response = jwt.sign(user, secretKey, { expiresIn: '1h' });

    const IResponse : IResponseService<string> = {
        status: response != null ? 200 : 500,
        message: response != null ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: response
    };

    return IResponse;
};


export const createUser = async (username: string, password: string) : Promise<IResponseService<String>> => {
    const existingUser = await Auth.findOne({ where: { username } });

    if (existingUser) {
        throw new Error(ResponseMessageEnum.UsedUsername);
    }
    
    const newUser = await Auth.create({ username, password});

    const IResponse : IResponseService<string> = {
        status: existingUser != null ? 200 : 500,
        message: existingUser != null ? ResponseMessageEnum.success : ResponseMessageEnum.notSuccess,
        data: newUser.id != null ?  ResponseMessageEnum.CreatedUsername : ResponseMessageEnum.NotCreatedUsername
    };

    return IResponse;
};


