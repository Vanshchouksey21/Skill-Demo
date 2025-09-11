const express = require("express");
const routes = express.Router();
const authmiddleware = require("../middleware/authMiddleware")

const { home, registration , Login, Userr } = require("../controllers/authControllers");

routes.get("/" , home);
routes.post("/registration" , registration);
routes.post("/login" , Login);
routes.get("/user",authmiddleware , Userr);

module.exports = routes ;