import express from "express";
import mongoose from "mongoose";
import userRouter  from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import dotenv from "dotenv";
dotenv.config();

// mongoose.connect("mongodb+srv://ashish:ashish@mern-estate.jlhoarm.mongodb.net/mern?retryWrites=true&w=majority")  // this is also  a way but we do not use it because we do not want to give the our private data like password and all
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to the database MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());  
// by default we cann't send the json file to the server so we use it to send the json file using the insomnia

app.listen(3000, () => {
  console.log("server is running on the port 30000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); 

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode||500;
  const message= err.message || 'Internet server Erro';
  return res.status(statusCode).json({
    success: false, 
    statusCode,
    message,
  });
});