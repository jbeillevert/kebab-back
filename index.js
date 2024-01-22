require("dotenv").config();
const express = require("express");
const router = require("./src/router/routes.js");
const cors = require("cors");

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})