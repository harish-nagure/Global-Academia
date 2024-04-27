const mongoose= require('mongoose')
const DB = process.env.DATABASE;
mongoose.set('strictQuery',true);
mongoose.connect(DB).then(()=>{
  console.log('Connection Successful');
}).catch((err)=>console.log('Connection Unsuccessful'));