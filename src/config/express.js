const express = require('express');
const handle = require('express-handlebars');
const cors = require('cors');
const {userRouter,productRouter,categoryRouter,signRouter, buyRouter, worksShop,} = require("../modules/controllers/routes")
require('dotenv').config();
//inicializacion
const app = express();
//Setting
app.use(express.json());
app.set("port",process.env.PORT || 3000);

app.use(
    express.json({limit:"50mb"}) //maximo de nuestras peticiones
);
//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(cors({origins:"*"})); //recibe cualquier peticion con x origen
app.use(express.json());

//Routes
app.get("/",(request,response)=>{
    response.send("Hola mongo")
})

app.use("/shop/user",userRouter);
app.use("/shop/products",productRouter);
app.use("/shop/category",categoryRouter);
app.use("/shop/login",signRouter);
app.use("/shop/buy",buyRouter);
app.use("/shop/service",worksShop);
module.exports = {
    app
};