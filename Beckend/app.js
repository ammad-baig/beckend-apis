const express = require("express");
require("dotenv").config();
const courserouter = require("./Route/courseroute");
const authrouter = require("./Route/authroute");
const mongoose = require("mongoose");
const cors = require("cors");

// const corsOptions = {
//   origin: "http://localhost:5173",
//   methods: "GET,PUT,POST,DELETE",
//   optionsSuccessStatus: 204,
// };

const App = express();
App.use(express.json());
App.use(cors());

App.use("/courses", courserouter);
App.use("/auth", authrouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(`server listening on localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
