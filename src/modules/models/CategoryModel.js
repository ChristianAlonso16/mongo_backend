const{Schema, model} = require('mongoose');
const categorySchema = new Schema({
        name:{
            type:String,
            require:true
        },
    }, {timestamps:true} //creacion
)

module.exports = model('Category',categorySchema);