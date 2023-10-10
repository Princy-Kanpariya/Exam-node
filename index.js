const http = require('http');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/db/dbconnection");
const routes = require("./src/routes/v1");
require("./src/helpers/cron");
const config = require("./src/config/config");
const path = require("path")

const app = express();

/** Allow form-data from body */
app.use(bodyParser.urlencoded({ extended: false }));

/** Allow json data from body */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

/**img */
app.use(express.static(path.join(__dirname, `./public`)));

/** Routes with Namespace (/v1) */
app.use("/v1", routes);

/** If rounte not found then show error */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** create server using http */
const server = http.createServer(app);

/** Database connection */
connectDB();

server.listen(config.port, () => {
  console.log(`Server listing port number ${config.port}`);
});
