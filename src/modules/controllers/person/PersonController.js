const {Router,Response} = require('express');
const userSchema = require('../../models/PersonModel');
const { hashPassword, validateError} = require("../../../utils/fuctions");

const insert = async (req, res = Response) => {
  try {
    const { name,email,password,role } = req.body;
    console.log(req.body);
    const user = await userSchema({ name,email, password,role});
    user.password = await hashPassword(password);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).send({ message });
  }
};
const getAll = async (req,res = Response) =>{
  try {
    const results= await userSchema.find();
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    const message = validateError(err);
    res.status(400).json({ message });
  }
}

const getById = async (req,res = Response) =>{
  try {
    const {id} = req.params;
    const results= await userSchema.findById(id);
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    const message = validateError(err);
    res.status(400).json({ message });
  }
}

const deleteById = async (req,res = Response) =>{
  try {
    const {id} = req.param;
    const results= await userSchema.deleteOne({id});
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    const message = validateError(err);
    res.status(400).json({ message });
  }
};



const update = async (req, res = Response) => {
  try {
    const { id,name,email,password } = req.body;
    console.log(req.body);
    //const pass = await hashPassword(password);
    const user = await userSchema.findByIdAndUpdate(id,{name,email,password : await hashPassword(password)},{useFindAndModify: false });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).send({ message });
  }
};


const userRouter = Router();
userRouter.post('/', [], insert);
userRouter.get('/',[],getAll);
userRouter.get('/:id',[],getById);
userRouter.put('/',[],update);
userRouter.delete('/:id',[],deleteById);
module.exports = {userRouter, };