const mongoos=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoos.connect(process.env.MONGO_DB_CONNECTION,{
          
     } );
     console.log('DB connected');
    }catch(err){
        console.log('Failed to connect',err.message);
        console.log(err.message);
        process.exit(1);
    }
};
module.exports=connectDB;