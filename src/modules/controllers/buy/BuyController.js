const {Router,Response} = require('express');
const buySchema = require('../../models/BuyModel');
const { validateError} = require("../../../utils/fuctions");

const insert = async (req, res = Response) => {
    try {
        const { price, buy,user} = req.body;
        console.log(req.body);
        const response = await buySchema({price,buy,user});
        await response.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).send({ message });
    }
};


const getAll = async (req,res = Response) =>{
    try {
        const results= await buySchema.find();
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
        const results= await buySchema.findById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
}





const buyRouter = Router();
buyRouter.post('/', [], insert);
buyRouter.get('/',[],getAll);
buyRouter.get('/:id',[],getById);
module.exports = {buyRouter};