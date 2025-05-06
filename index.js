const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./configuration/mongodb'); 
const userRoute=require('./routes/routes');
const app=express();
const port=8080;


dotenv.config();
app.use(express.json());



app.use(express.urlencoded({extended:true}));




app.use('/api/user',userRoute);
connectDB()
app.listen(port,()=>{
    console.log(`Le serveur fonctionne sur le port ${port}`);
})
