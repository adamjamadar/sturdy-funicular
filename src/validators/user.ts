import { check } from 'express-validator'

export const validateUserAuth = [
    check('email').trim().escape().notEmpty().isEmail().withMessage('Your Email is Invalid!'),
    check('password').trim().notEmpty().withMessage('field is empty').isString().isLength({ min: 8, max: 30 }).withMessage(' your Password is Invalid!')]