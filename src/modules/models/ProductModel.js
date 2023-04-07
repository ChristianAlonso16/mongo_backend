const{Schema, model} = require('mongoose');

const productSchema = new Schema({

        name:{
            type:String,
            require:true
        },
        description:{
            type: String,
            require: true
        },
        price:{
          type: String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
        count:{
            type:Number,
            require:true
        }
    }, {timestamps:true} //creacion
)
productSchema.index({name:1}, {unique:true})

module.exports = model('Product', productSchema);