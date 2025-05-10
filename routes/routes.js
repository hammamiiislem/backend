const express=require('express');
const useControler=require('../controles/useControl');
const router=express.Router();
router.get('/',useControler.getAllUsers);
router.post('/addUser',useControler.AddUser);
router.post('/login',useControler.login);
module.exports=router;
