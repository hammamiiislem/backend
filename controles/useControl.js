const {User}=require('../moduls/User');

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
    try{
        const savedUser=await user.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={
    getAllUsers,
    AddUser
}