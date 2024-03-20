
import { NextFunction, Request, Response} from "express";
import { ValidationChain, body, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async(req: Request, res:Response, next:NextFunction) => {
        for(let validation of validations){
            const result = await validation.run(req)
            if(!result.isEmpty()){
                const errors = validationResult(req)
                return res.status(422).json({errors:errors.array()})

            }
            
            }
            next()
        }
    }

export const LoginValidiator = [
    body('email').trim().isEmail().withMessage("Email is required"),
    body('password').trim().isLength({min: 6}).withMessage("Pssword should be atleast 6 characters")
]


export const SignupValidiator = [
    body('name').notEmpty().withMessage("Name is required"),
    ...LoginValidiator
]