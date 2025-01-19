import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRouter.js";
dotenv.config();

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected db");
  })
  .catch((e) => {
    console.log(e, "error");
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("serve at localhost");
});
