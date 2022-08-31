const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");

//methods libraries
const app = express();
require("dotenv").config();

//Middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cors());

//Database setup
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Coneccion de base de datos exitosa");
  });

//routes
app.use("/api/category", require("./routes/category"));
app.use("/api/product", require("./routes/product"));
app.use("/api/auth", require("./routes/auth"));

//Listen to port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor conectado en el puerto ${port}`);
});
