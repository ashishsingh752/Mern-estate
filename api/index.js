import express from "express";
import mongoose from "mongoose";
import userRouter  from './routes/user.route.js'
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

app.listen(3000, () => {
  console.log("server is running on the port 30000");
});

app.use('/api/user', userRouter)