import { Router } from 'express';
import signup from '../../controller/patient_controller/Signup.controller';
// middlware
import signupMiddleware from '../../middleware/patient_middleware/Signup.middleware';

const router = Router();

router.post('/patient', signupMiddleware.signup, signup);

export default router;