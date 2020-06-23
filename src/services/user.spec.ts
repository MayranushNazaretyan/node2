import { User } from '../models/user';
import request from 'supertest';
import app from '../app';
import {createConnection} from "typeorm";

const user = new User();
user.login = "Ani";
user.password = "123";
user.age = 15;
user.isDeleted = false;

let conn;

beforeAll(async ()=> {
   conn = await createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5433,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.NODE_ENV,
        entities: [
            User,
        ],
        synchronize: true,
        logging: false
    });
   await conn.manager.save(user);
});

afterAll (async ()=>{
    await conn.close();
});

it('should get users', async() => {
    const result = await request(app)
        .get('/user')
        .set('Content-Type', 'application/json');

    expect(result.statusCode).toEqual(200);
});

it('should get user', async() => {
    const result = await request(app)
        .get('/user/1')
        .set('Content-Type', 'application/json');

    expect(result.statusCode).toEqual(200);
    expect(result.body.login).toEqual('Ani');
});

it('should add user', async() => {
    const result = await request(app)
        .post('/user')
        .send({
            login: 'Van',
            password: '236',
            age: 22,
            isDeleted: false
        })
        .set('Accept', 'application/json');

    expect(result.statusCode).toEqual(200);
    expect(result.body.login).toEqual('Van');
});

it('should update user', async() => {
    const result = await request(app)
        .put('/user/1')
        .send({
            login: 'Van',
            password: '236',
            age: 22,
            isDeleted: false
        })
        .set('Accept', 'application/json');

    expect(result.statusCode).toEqual(200);
    expect(result.body.login).toEqual('Van');
});

it('should delete user', async() => {
    const result = await request(app)
        .delete('/user/1')
        .set('Accept', 'application/json');

    expect(result.statusCode).toEqual(200);
});

it('should get user', async() => {
    const result = await request(app)
        .get('/user/1')
        .set('Content-Type', 'application/json');

    expect(result.statusCode).toEqual(200);
    expect(result.body.isDeleted).toEqual(true);
});
