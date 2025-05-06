const express=require('express');
const useControler=require('../controles/useControl');
const router=express.Router();
router.get('/',useControler.getAllUsers);
router.post('/addUser',useControler.AddUser);
module.exports=router;