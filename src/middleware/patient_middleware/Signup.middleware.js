import { check } from 'express-validator';

const signupMiddleware = {
    signup: [
        // title
        check('title').isString().isLength({min:2}).withMessage('title is required'),
        // gender
        check('gender').isString().isLength({min:4}).withMessage('gender is required'),
        // genotype 
        check('genotype').isString().isLength({min:2}).withMessage('genotype is required'),
        // marital status
        check('maritalStatus').isString().isLength({min:2}).withMessage('marital status is required'),
        // birth date
        // check('birthDate').isISO8601().withMessage('birth date is required'),
        // email
        check('email').isEmail().withMessage('invalid email value'),
        // address
        check('address').isString().isLength({min:2}).withMessage('address is required'),
        // state
        check('state').isString().isLength({min:2}).withMessage('state is required'),
        // country
        check('country').isString().isLength({min:2}).withMessage('country is required'),
        // phone
        check('phone').isString().isLength({min:11}).withMessage('phone is required'),
        // admission date
        // check('admissionDate').isISO8601()withMessage('admission date is required'),
        // discharge date
        // check('dischargeDate').isISO8601().withMessage(' is required'),
        // hmo card number
        check('hmoCardNo').isString().isLength({min:2}).withMessage('hmo card number is required'),
        // purpose 
        check('purpose').isString().isLength({min:2}).withMessage('purpose is required'),
        // hmo Id
        // check('hmoId').isInt(),
        // hmo name
        check('hmoName').isString().isLength({min:2}).withMessage('hmo name is required'),
        // status
        check('status').isString().isLength({min:2}).withMessage('status is required'),
    ]
}


export default signupMiddleware;