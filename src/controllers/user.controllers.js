import { UserModel } from "../models/user.models.js";

export const ctrlCreateUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await UserModel.create({ name, email, password });
        res.status(201).json({ newUser });
  if (!newUser) return res.sendStatus(404);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlGetuser = async (req, res, next) => {
    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlGetUserId = async (req, res, next) => {
    try {
        const { userId } = req.params;
        console.log(userId);
        console.log(userId)
        const user = await UserModel.findOne({ _id: userId });
        console.log(user)
        if (!user) {
          return res.sendStatus(404);
        }
      
        res.status(200).json(user);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrl  = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};