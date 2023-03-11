const {Router,Response} = require('express');
const worksShopSchema = require('../../models/WorksShopModel');
const { validateError} = require("../../../utils/fuctions");

const insert = async (req, res = Response) => {
    try {
        const { name,price,category} = req.body;
        console.log(req.body);
        const response = await worksShopSchema({name,price,category});
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
        const results= await worksShopSchema.find();
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
        const results= await worksShopSchema.findById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({ message });
    }
}





const worksShop = Router();
worksShop.post('/', [], insert);
worksShop.get('/',[],getAll);
worksShop.get('/:id',[],getById);
module.exports = {worksShop};