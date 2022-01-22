const express = require('express');
const morgan = require('morgan');
const router = require('./Routers');
const { white, bold, italic } = require('colorette');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/contacts', router);

app.get('*', (req,res)=>{
    res.send('<h1>Invalid Request! </br> Go /contact route</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(bold(white(italic("SERVER IS RUNNING ON PORT "+ PORT))));
});
