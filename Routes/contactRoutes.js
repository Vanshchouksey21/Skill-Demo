const express = require("express");
const { contactForm } = require("../controllers/formController.");
const routes = express.Router();

routes.post ("/contact" , contactForm )

module.exports = routes ;