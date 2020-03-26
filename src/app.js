// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';

// import routers
import patientRoute from './route/patient_route/Index.route';


// intantiate express
const app = express();

// configure dotenv
dotenv.config();

// configure morgan
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// configure file-upload
app.use(fileUpload({
    useTempFiles: true
}));

// app route paths
app.use('/api/v1/', patientRoute);

// welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to the api'
    });
});

// catch all incorrect routes
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'incorrect route'
    });
});

export default app;