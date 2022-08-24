import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://ashishsng:ashish8423@cluster0.igdovfh.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

  mongoose
    .connect(CONNECTION_URL)
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((error) => console.log("Error: ", error.message));
});
