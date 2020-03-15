import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 3000;

const usersRouts = require('./routes/users');

app.use(express.json());

app.use('/', usersRouts);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
