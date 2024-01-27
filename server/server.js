require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const plansRoutes = require('./routes/plans');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/login', loginRoutes);
app.use('/api/user', userRoutes);
app.use('/api/plans', plansRoutes);

app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
})