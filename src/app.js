// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// intantiate express
const app = express();

// configure dotenv
dotenv.config();

// configure body parser
app.use(bodyParser.json({extended : true}));

// declare port
const port = process.env.PORT || 4000;

// welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to the api'
    });
});

app.use('*', (req, res) => {
    res.status(200).json({
        message: 'incorrect route'
    });
});

// app listens on declared port
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})