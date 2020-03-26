import { Router } from 'express';
import router from './Signup.route';

const patientRouter = Router();

patientRouter.use('/post', router);

export default patientRouter;