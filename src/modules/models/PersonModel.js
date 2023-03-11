const{Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({

        name:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    role:{
            type:String,
        require:false
    }

}, {timestamps:true} //creacion
)

module.exports = model('Usuario', userSchema);