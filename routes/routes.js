const express=require('express');
const useControler=require('../controles/useControl');
const router=express.Router();
const {logged}=require('../utils/accesToken');
router.get('/',useControler.getAllUsers);
router.post('/addUser',useControler.AddUser);
router.post('/login',useControler.login);
router.get('/me', logged, useControler.getMe);
module.exports=router;
