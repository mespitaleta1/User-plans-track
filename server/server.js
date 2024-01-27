const express = require('express')
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/login', loginRoutes);

app.get('/',(req, res)=> {
    res.send('Hello World!')
})

app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
})