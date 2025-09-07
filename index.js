const express = require("express");
const app = express();
const route = require("./Routes/authRoutes")
const connectdb = require("./utills/db");
const errorMidleware = require("./middleware/errrorMiddleware");
const routes = require("./Routes/contactRoutes");
const cors = require("cors")

require("dotenv").config();

const PORT = process.env.PORT
app.use(express.json());
app.use(cors());

app.use("/" , route);
app.use("/" , routes)
app.use(errorMidleware);

connectdb().then( ()=>{
app.listen(PORT , ()=>{
    console.log(`App is Working on ${PORT}`);
    
})
})
