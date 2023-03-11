const{Schema, model} = require('mongoose');
const buySchema = new Schema({
        price:{
            type:Number,
            require:true
        },
        buy:{
            product:{
                type:String,
                require: true
            },
            category:{
                type:String,
                require: true
            }
        },
        user:{
            type:String,
            require:true
        }
    }, {timestamps:true} //creacion
)

module.exports = model('Compra',buySchema);