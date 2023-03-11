const {Router,Response} = require('express');
const productSchema = require('../../models/ProductModel');
const { validateError} = require("../../../utils/fuctions");

const insert = async (req, res = Response) => {
    try {
        const { name,description,price,category } = req.body;
        console.log(req.body);
        const produtc = await productSchema({ name,description, price, category});
        await produtc.save();
        res.status(200).json(produtc);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).send({ message });
    }
};


const getAll = async (req,res = Response) =>{
    try {
        const results= await productSchema.find();
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
        const results= await productSchema.findById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
}


const update = async (req, res = Response) => {
    try {
        const {id, name,description,price,category} = req.body;
        console.log(req.body);
        const product = await productSchema.findByIdAndUpdate(id,  {name,description,price,category},{useFindAndModify: false });
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).send({ message });
    }
};

const deleteById = async (req,res = Response) =>{
    try {
        const {id} = req.body;
        const results= await productSchema.deleteOne({id});
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
};


const productRouter = Router();
productRouter.post('/', [], insert);
productRouter.get('/',[],getAll);
productRouter.get('/:id',[],getById);
productRouter.put('/',[],update);
productRouter.delete('/',[],deleteById);
module.exports = {productRouter, };