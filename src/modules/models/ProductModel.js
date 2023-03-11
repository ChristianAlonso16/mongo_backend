const{Schema, model} = require('mongoose');

const productSchema = new Schema({
        _id: {type:Number,
        require:true},
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

module.exports = model('Product', productSchema);