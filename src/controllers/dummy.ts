import { Request, Response, NextFunction } from "express"
import createHttpError from 'http-errors'
import { blogs } from "../models/blogs"
import { genMultiFakeBlogs } from "../seeder/dummyBlogs"

export default {
    post: async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            await blogs.deleteMany()
            const list = genMultiFakeBlogs(30)
            const result = await blogs.insertMany(list)
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    },
    get: async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {



            const count = await blogs.countDocuments()

            let result = await blogs.find({}).lean()

            if (!result) result = []
            res.status(200).json({ result, count })

        } catch (err) {
            next(err)
        }
    },
    update: async (_req: Request, _res: Response, next: NextFunction): Promise<any> => {
        try {
            throw createHttpError(403, '')
            // res.status(200).json("Update Request")

        }
        catch (err) {
            next(err)
        }

    },
    delete: async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
        res.status(200).json("Delete Request")

    }
}