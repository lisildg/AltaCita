const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.routes');
const morgan = require('morgan');
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(indexRouter)
module.exports = app;