//DEPENDENCIES

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');

//ROUTES

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

