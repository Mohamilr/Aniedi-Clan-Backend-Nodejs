// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

// intantiate express
const app = express();

// configure dotenv
dotenv.config();

// configure morgan
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


// welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to the api'
    });
});

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'incorrect route'
    });
});

export default app;