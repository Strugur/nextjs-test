import {Request,Response,NextFunction} from 'express';

export default function (req:Request, res:Response ,next:NextFunction) {
    res.header('Content-Range','products 0-20/20');
    next();
}