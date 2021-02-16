import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

const app = express();
import cors from 'cors';

import { User } from './models';

require('dotenv').config()

// middleware

app.use(express.json()); //req.body
app.use(cors());

// User.sequelize.sync({ force: true })
//     .then(() => {
//         console.log('DB connection esatblished !');
//     })
//     .catch((err) => {
//         console.log('Error : ' + err);
//     });

// Import Route of whole project route 
import users from './routes/user';

// Use Route of whole project
app.use('/users', users);

app.get('/', (req, res) => res.send('INDEX'));

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 5000");
})
