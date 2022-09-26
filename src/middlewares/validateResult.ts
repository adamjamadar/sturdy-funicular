import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import createHttpError from 'http-errors'

export const validateRequest = (req: Request, _res: Response, next: NextFunction) => {

    try {
        const errors = validationResult(req)

        if (errors.array().length > 0) {

            const msg = errors.array().filter((v, i, a) => a.findIndex((v2) => v2.param === v.param) === i)
                .map(({ param, msg }) => {
                    return { [param]: msg }
                })

            throw createHttpError(400, 'Invalid Params', { data: msg })
        }
        return next()
    } catch (err) {
        next(err)
    }

}