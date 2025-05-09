const bcrypt=require('bcrypt');
const {User}=require('../moduls/User');
const jwt = require('jsonwebtoken');
const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
const AddUser=async(req,res)=>{
    const {nom,prenom,email,age,password}=req.body;
    const user=new User({
        nom,
        prenom,
        email,
        age,
        password
    });
    user.password=await bcrypt.hash(user.password,10);
    try{
        const savedUser=await user.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'User not found'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'});
        
        
        }
        const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'24h'});   
        res.status(200).json({token});
 
        }catch(err){
            res.status(500).json({message:err.message});
        }}
module.exports={
    getAllUsers,
    AddUser,
    login
}