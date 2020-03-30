import { Router } from 'express';
import router from './signup.route';

const patientRouter = Router();

patientRouter.use('/patient', router);

export default patientRouter;