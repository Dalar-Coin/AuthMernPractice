const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Database not connected", err));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./Routes/authRoutes"));

app.use("/", require("./Routes/authRoutes"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
