const{Schema, model} = require('mongoose');
const categorySchema = new Schema({
        name:{
            type:String,
            require:true
        },
    }, {timestamps:true} //creacion
)
categorySchema.index({email:1}, {unique:true})
module.exports = model('Category',categorySchema);