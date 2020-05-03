import express from 'express';
import { usersRouts } from './routes/users';
import { groupRouts } from './routes/group';
import csv from 'csvtojson';
import fs from 'fs';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './models/user';
import fileUpload from "express-fileupload";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { Group, Permission } from "./models/group";

const app = express();
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
const port = Number(process.env.PORT) || 3000;

const addUsersToGroup = async(groupId: string, userIds: string[]): Promise<void> => {
    const userRepository = getManager().getRepository(User);
    const groupRepository = getManager().getRepository(Group);
    const group = await groupRepository.findOne(groupId);
    group.user = await userRepository.findByIds(userIds);
    await groupRepository.save(group);
};

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities: [
        User,
        Group,
    ],
    synchronize: true,
    logging: false
})
    .then(async connection => {

        app.use(express.json());
        app.use('/user/', usersRouts);
        app.use('/group/', groupRouts);
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

        const group1 = new Group();
        group1.name = 'Group1';
        group1.permission = [Permission.READ, Permission.WRITE];
        group1.user = [user, user1];

        const group2 = new Group();
        group2.name = 'Group2';
        group2.permission = [Permission.READ];

        await connection.manager.save(user);
        await connection.manager.save(user1);
        await connection.manager.save(group1);
        await connection.manager.save(group2);

        console.log("Users have been saved")
        console.log(addUsersToGroup("2", ["1", "2"]));
}).catch(error => console.log(error));


process.stdin.on('data', data => {
    process.stdout.write(data.reverse());
});



