import { Router } from 'express';
import signup from '../../controller/patient_controller/Signup.controller';

const router = Router();

router.post('/patient', signup);

export default router;