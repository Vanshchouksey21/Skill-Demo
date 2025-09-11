const express = require("express");
const { contactForm } = require("../controllers/formController.");
const routes = express.Router();

routes.post ("/ " , contactForm )

module.exports = routes ;