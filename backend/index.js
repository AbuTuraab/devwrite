const express = require("express");
require("dotenv").config();
let port = process.env.PORT;
const app = express();
const cors = require("cors");

const userRouter = require("./Routes/User.Routes");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/", userRouter);
// app.use("/signup", userRouter);
// app.use("/login", userRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
