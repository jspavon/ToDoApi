import { Request, Response, NextFunction } from 'express';
import { envs } from '../config/envs';
import jwt from 'jsonwebtoken';
import { IResponseService } from '../shared/interface/IResponseService'
import { ResponseMessageEnum } from '../shared/enums/generic.enums'

const secretKey = envs.JWT_SECRET;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {

                const IResponse : IResponseService<null> = {
                    status: 403,
                    message: ResponseMessageEnum.Forbidden,
                    data: null
                };

                return res.status(IResponse.status).send(IResponse);
            }

            (req as any).user = user;
            next();
        });
    } else {
        const IResponse : IResponseService<null> = {
            status: 401,
            message: ResponseMessageEnum.Unauthorized,
            data: null
        };
        
        res.status(IResponse.status).send(IResponse);
    }
};
