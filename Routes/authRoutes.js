const express = require("express");
const routes = express.Router();

const { home, registration , Login } = require("../controllers/authControllers");

routes.get("/" , home);
routes.post("/registration" , registration);
routes.post("/login" , Login);

module.exports = routes ;