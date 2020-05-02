import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../models/user";

export const getUser = async (req: Request, res: Response) => {
    const userRepository = getManager().getRepository(User);
    const {id} = req.params;
    const user = await userRepository.findOne(id);
    return res.send(user);
};

export const createUser = async (req, res) => {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
};

export const deleteUser = async (req, res) => {
    const userRepository = getManager().getRepository(User);
    const { id } = req.params;
    const userToDelete = await userRepository.findOne(id);
    userToDelete.isDeleted = true;
    await userRepository.save(userToDelete);
    const users = await userRepository.find();
    return res.json(users);
};

export const getAutoSuggestUsers = async (req, res) => {
    const userRepository = getManager().getRepository(User);
    const { loginSubstring, limit } = req.query;
    const users = await userRepository.find();
    const autoSuggestUsers = users.filter(user => (user.login).includes(loginSubstring));
    const sortedAutoSuggestUsers = autoSuggestUsers.sort((a, b) => {
        return (a.login > b.login) ? 1 : -1;
    });
    return res.json(sortedAutoSuggestUsers.slice(0, limit));
};


export const upload = async(req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            res.send({
                status: true,
                message: 'File is uploaded'
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
