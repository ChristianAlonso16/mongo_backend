const{Schema, model} = require('mongoose');
const buySchema = new Schema({
        price:{
            type:Number,
            require:true},
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
    user: { type: Schema.Types.ObjectId, ref: "Usuario" },

    date:{type: String}
    }, {timestamps:true} //creacion
)
buySchema.index({user:1,date:1})
module.exports = model('Compra',buySchema);