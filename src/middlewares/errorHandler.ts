import { Request, Response, NextFunction } from 'express'
import { IN_PROD } from '../config/app'

interface ResponseErr {
    message: string,
    status: number,
    stack: Record<string, any>
    data: any
}

export const NotFound = (_req: Request, _res: Response, next: NextFunction) => {

    const err = new Error('Not Found') as any as ResponseErr
    err.status = 404
    next(err)
}

export const errorHandler = (err: ResponseErr, _req: Request, res: Response, _next: NextFunction) => {

    if (!err.status) err.status = 500
    if (!err.message) err.message = 'Something went wrong!'

    res.send({
        error: {
            status: err.status,
            message: err.message,
            stack: !IN_PROD ? err.stack : null,
            data: err.data || ''
        }
    })
}