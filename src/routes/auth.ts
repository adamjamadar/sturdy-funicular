import express from 'express'
import { validateRequest } from '../middlewares/validateResult'
import { validateUserAuth } from '../validators/user'
import authController from '../controllers/auth'

const route = express.Router()

route.post('/register', validateUserAuth, validateRequest, authController.register)
route.post('/login', validateUserAuth, validateRequest, authController.login)

export default route