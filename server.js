import app from './src/app';

// declare port
const port = process.env.PORT || 4000;



// app listens on declared port
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});