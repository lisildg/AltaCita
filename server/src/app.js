const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.routes');
const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter)
module.exports = app;