import express from 'express';
import { usersRouts } from './routes/users';
import csv from 'csvtojson';
import fs from 'fs';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './models/user';

const app = express();
const port = Number(process.env.PORT) || 3000;

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities: [
        User
    ],
    synchronize: true,
    logging: false
})
    .then(async connection => {

        app.use(express.json());
        app.use('/', usersRouts);
        app.listen(port, err => {
            if (err) {
                return console.error(err);
            }
            fs.writeFile('./src/csv/newfile.txt', '', (error) => {
                if (error) throw error;
                console.log('File is created successfully.');
            });
            const csvFilePath = './src/csv/nodejs-hw1-ex1.csv';
            csv()
                .fromFile(csvFilePath)
                .subscribe((json)=>{
                        try {
                            fs.appendFileSync('./src/csv/newfile.txt', JSON.stringify(json) + '\n');
                        } catch (err) {
                            throw err;
                        }
                    },
                    (e) => console.log(e),
                    () => console.log('File is updated successfully.'));
            return console.log(`server is listening on ${port}`);
        });

        // add predefined users
        const user = new User();
        user.login = "Ani";
        user.password = "123";
        user.age = 15;
        user.isDeleted = false;

        const user1 = new User();
        user1.login = "Karen";
        user1.password = "111";
        user1.age = 22;
        user1.isDeleted = false;

        await connection.manager.save(user);
        await connection.manager.save(user1);
        console.log("Users have been saved");
}).catch(error => console.log(error));


process.stdin.on('data', data => {
    process.stdout.write(data.reverse());
});



