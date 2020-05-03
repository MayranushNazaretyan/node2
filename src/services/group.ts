import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Group } from "../models/group";

export const getGroup = async (req: Request, res: Response) => {
    const groupRepository = getManager().getRepository(Group);
    const {id} = req.params;
    const group = await groupRepository.findOne(id);
    return res.send(group);
};

export const createGroup = async (req, res) => {
    const groupRepository = getManager().getRepository(Group);
    const group = await groupRepository.create(req.body);
    const results = await groupRepository.save(group);
    return res.send(results);
};

export const updateGroup = async (req, res) => {
    const { id } = req.params;
    const groupRepository = getManager().getRepository(Group);
    const group = await groupRepository.findOne(id);
    groupRepository.merge(group, req.body);
    const results = await groupRepository.save(group);
    return res.send(results);
};

export const deleteGroup = async (req, res) => {
    const groupRepository = getManager().getRepository(Group);
    const { id } = req.params;
    const userToDelete = await groupRepository.findOne(id);
    await groupRepository.remove(userToDelete);
    return res.json(id);
};

export const getGroups = async (req, res) => {
    const groupRepository = getManager().getRepository(Group);
    const groups = await groupRepository.find();
    return res.json(groups);
};
