const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    Gender:{
        type:String
    }
})

const User = mongoose.model('User' , userSchema)

module.exports = User