const {Router,Response} = require('express');
const categorySchema = require('../../models/CategoryModel');
const { validateError} = require("../../../utils/fuctions");

const insert = async (req, res = Response) => {
    try {
        const { name} = req.body;
        console.log(req.body);
        const category = await categorySchema({name});
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).send({ message });
    }
};


const getAll = async (req,res = Response) =>{
    try {
        const results= await categorySchema.find();
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
        const results= await categorySchema.findById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
}


const update = async (req, res = Response) => {
    try {
        const {id, name} = req.body;
        console.log(req.body);
        const category = await categorySchema.findOneAndUpdate(id,{name}, { useFindAndModify: false });
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).send({ message });
    }
};

const deleteById = async (req,res = Response) =>{
    try {
        const {id} = req.body;
        const results= await categorySchema.deleteOne({id});
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
};


const categoryRouter = Router();
categoryRouter.post('/', [], insert);
categoryRouter.get('/',[],getAll);
categoryRouter.get('/:id',[],getById);
categoryRouter.put('/',[],update);
categoryRouter.delete('/',[],deleteById);
module.exports = {categoryRouter, };