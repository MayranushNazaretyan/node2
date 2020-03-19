import { User } from '../models/user';

const usersMock = [{
        id: '1',
        login: 'userbbb',
        password: '123',
        age: 10,
        isDeleted: false,
    }, {
        id: '2',
        login: 'useraaa',
        password: '123',
        age: 12,
        isDeleted: false,
    }, {
        id: '3',
        login: 'hhhh',
        password: '123',
        age: 12,
        isDeleted: false,
    }];

const findById = (id: string) => usersMock.find(user => user.id === id);
const findByIdAndUpdate = (id: string, newUser: User) =>
    usersMock.map(user => {
        if (user.id === id) {
            return newUser;
        }
        return user;
    });

export const getUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await findById(id);
        return res.json(user);
    } catch (err) {
        console.error(err);
    }
};

export const createUser = async (req, res) => {
    const { id, login, password, age, isDeleted } = req.body;
    const newUser = { id, login, password, age, isDeleted };
    try {
        const createdUser = [...usersMock, newUser];
        return res.status(201).json(createdUser);
    } catch (err) {
        console.error(err);
    }
};

export const updateUser = async (req, res) => {
    const {id} = req.params;
    try {
        const updatedUser = await findByIdAndUpdate(id, req.body);
        return res.json(updatedUser);
    } catch (err) {
        console.error(err);
    }
};

export const getAutoSuggestUsers = async (req, res) => {
    const { loginSubstring, limit } = req.query;
    try {
        const autoSuggestUsers = usersMock.filter(user => (user.login).includes(loginSubstring));
        const sortedAutoSuggestUsers = autoSuggestUsers.sort((a, b) => {
            return (a.login > b.login) ? 1 : -1;
        });
        return res.json(sortedAutoSuggestUsers.slice(0, limit));
    } catch (err) {
        console.error(err);
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findById(id);
        user.isDeleted = true;
        const result = usersMock.map(item => {
            if (item.id === user.id) {
                return user;
            }
            return item;
        });
        return res.json(result);
    } catch (err) {
        console.error(err);
    }
};

