import { check } from 'express-validator'

export const validateUserAuth = [
    check('email').trim().escape().notEmpty().isEmail().withMessage('Invalid Email!'),
    check('password').trim().notEmpty().withMessage('field is empty').isString().isLength({ min: 8, max: 30 }).withMessage('Invalid Password!')]