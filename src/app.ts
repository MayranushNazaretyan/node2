import express from 'express';
import { usersRouts } from './routes/users';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.use('/', usersRouts);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
