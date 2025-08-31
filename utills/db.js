const mongoose = require("mongoose")
require("dotenv").config();




const connectdb  = async () =>{
    try {
      await  mongoose.connect(process.env.MONGO_URL)
      console.log("mongodb connected succesfull");
      
    } catch (error) {
        console.error("database  connection failed ");
        process.exit(0);
        
    }
}


module.exports = connectdb ;