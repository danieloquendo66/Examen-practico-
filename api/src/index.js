const express = require("express");
const app = express();
const port = 4000;
const { db } = require("./models");
const routes = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
db.sync({ force: false });
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
