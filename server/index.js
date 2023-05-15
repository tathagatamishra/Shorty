require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/connection");

const router = require("./route/route");

const app = express();

app.use(cors())
app.use(express.json());
app.use(router)


// app.use("/", router, (_, res) =>
//   res.status(404).send({ status: false, message: "Url not found !!!" })
// );

const PORT = process.env.PORT || 6969

app.listen(PORT, () => console.log("Server is 🏃 🏃 🏃"));
