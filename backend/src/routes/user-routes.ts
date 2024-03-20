import {Router} from 'express'
import {getAllUsers, userLogin, userSignUp} from '../controllers/user-controllers.js'
import { LoginValidiator, SignupValidiator, validate } from '../utils/validators.js'

const userRoutes = Router()


userRoutes.get('/', getAllUsers)
userRoutes.post('/signup', validate(SignupValidiator), userSignUp)
userRoutes.post('/login', validate(LoginValidiator), userLogin)

export default userRoutes
