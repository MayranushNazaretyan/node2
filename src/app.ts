import express from 'express';
import { usersRouts } from './routes/users';
import csv from "csvtojson";
import fs from "fs";

const app = express();
const port = Number(process.env.PORT) || 3000;

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

process.stdin.on('data', data => {
    process.stdout.write(data.reverse());
});



