const mongoose=require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    age:{type:Number, min:18,max:100},
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:1024,
    },
},{timestamps:true});
const User=mongoose.model('User',UserSchema);
module.exports={
    User
};
