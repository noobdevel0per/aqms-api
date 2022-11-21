const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');


const bodyParser = require('body-parser');

//import route 
const dataRoute = require('./routes/data');

const app = express();
const PORT = 8080;

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/data', dataRoute);


app.listen(PORT,
    () => console.log(`Serving at http://localhost:${PORT} 🍕`)
)

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB 🚀')
});

app.get('/', (req, res) => { res.send('welcome to AQMS API \n use /data to get all the data');}); 