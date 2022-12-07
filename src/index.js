const express = require("express");
const routes = require("./routes/route.js");
const mongoose = require("mongoose");

const app = express();

app.use(express.json);

mongoose
  .connect(
    "mongodb+srv://Gyaneshwer694:gYaN0694Mdb@cluster1.i15rwas.mongodb.net/?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )

  .then(() => console.log("DB is Connected"))
  .catch((err) => console.log(err.message));

app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running at port " + (process.env.PORT || 3000));
});
