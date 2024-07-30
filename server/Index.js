const express = require("express");
const dotenv = require("dotenv").config;
const cors = require("cors");

const app = express();

//midddleware
app.use("/", require("./Routes/authRoutes"));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
