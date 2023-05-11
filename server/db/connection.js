const mongoose = require("mongoose");

const MDBString = process.env.DATABASE;

mongoose
  .connect(MDBString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
