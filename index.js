const express = require('express');
const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
// const path = require('body-parser');
const app = express();
const cors = require('cors');

// middleware

app.use(express.json()); //req.body
app.use(cors());

// Routes
app.get('/', (req, res) => res.send('INDEX'));

app.listen(process.env.PORT, () => {
    console.log("I am Here fore server runing");
})
