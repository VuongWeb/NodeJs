// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import authRouter from './routes/auth'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter)
// connect database
mongoose.connect("mongodb://localhost:27017/NodeJs")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))
// Connect
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
