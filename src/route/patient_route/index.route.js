import { Router } from 'express';
import router from './Signup.route';

const patientRouter = Router();

patientRouter.use('/patient', router);

export default patientRouter;