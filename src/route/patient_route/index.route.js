import { Router } from 'express';
import router from './signup.route';

const patientRouter = Router();

patientRouter.use('/post', router);

export default patientRouter;