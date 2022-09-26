import { Request, Response, NextFunction } from 'express'
import createHttpError from 'http-errors'
import { user } from '../models/user'
import bcrypt from 'bcryptjs'

export default {
    register: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const { email, password } = req.body
            console.log(password);
            const exists = await user.findOne({ email }).lean()

            if (exists) throw createHttpError(409, 'User already exists!')
            const salt = await bcrypt.genSalt(10)

            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = new user({
                email, password: hashedPassword
            })
            const saveUser = await newUser.save()

            if (!saveUser) throw createHttpError(400, 'Failed to register user!')

            res.status(200).json('Successfully registered')
        } catch (err) {
            next(err)
        }
    }
    ,
    login: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const { email, password } = req.body
            console.log(password);

            const findUser = await user.findOne({ email }).lean()

            if (!findUser || !findUser.password) { throw createHttpError(400, 'Invalid Email And Password') }

           const match = await bcrypt.compare(password,findUser.password);
           console.log(match)
           res.status(match ? 200 :401).json(match ? "Login Successfully" : "Invalid Password")

        } catch (err) {
            next(err)
        }
    }
}