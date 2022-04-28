const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect("mongodb+srv://Starjul:Jell2540@sandbox.cyfjy.mongodb.net/exerack" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connect DB Successed");
  })
  .catch((err) => {
    console.log("Connect DB Error", err);
  });
