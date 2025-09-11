const express = require("express");
const { Services } = require("../controllers/serviceController");
const route = express.Router();



route.get("/service" , Services );


module.exports = route ;