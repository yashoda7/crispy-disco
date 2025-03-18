const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const authRouter = require("./routes/auth");

const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());
app.use(authRouter);

const DB =process.env.db;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});