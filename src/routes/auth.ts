import express from 'express';
import { getManager } from 'typeorm';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
    const { login, password } = req.body;
    const userRepository = getManager().getRepository(User);
    const user = userRepository.find({ login, password });
        if (user) {
            res.status(200).json({
                message: "OK",
                data: {
                    "user": {
                        login: req.body.login,
                    }
                },
                token: jwt.sign({
                    email: req.query.email,
                    login: req.query.login,
                    password: req.query.password,
                }, 'secret', {expiresIn: 5000})
            });
        } else {
            res.status(404).json({
                message: "Not Found."
            });
        }
    }
);

export const authRouts = router;
